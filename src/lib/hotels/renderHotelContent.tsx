import React from "react";
import Link from "next/link";

export function renderHotelParagraph(text: string, keyPrefix: string = ''): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let keyCounter = 0;

  // Pattern to match: <Link href="/path" className="...">text</Link>
  const linkPattern = /<Link href="([^"]+)"[^>]*>([^<]+)<\/Link>/g;
  // Pattern to match: <strong>text</strong>
  const strongPattern = /<strong>([^<]+)<\/strong>/g;

  // Find all matches with positions
  const matches: Array<{ type: 'link' | 'strong'; index: number; length: number; content: string; href?: string }> = [];

  let match: RegExpExecArray | null;
  while ((match = linkPattern.exec(text)) !== null) {
    matches.push({
      type: 'link',
      index: match.index,
      length: match[0].length,
      content: match[2],
      href: match[1],
    });
  }

  // Reset regex
  strongPattern.lastIndex = 0;
  while ((match = strongPattern.exec(text)) !== null) {
    // Check if this strong tag is inside a link (overlapping)
    const isInsideLink = matches.some(m => 
      m.type === 'link' && 
      match!.index >= m.index && 
      match!.index + match![0].length <= m.index + m.length
    );
    if (!isInsideLink) {
      matches.push({
        type: 'strong',
        index: match.index,
        length: match[0].length,
        content: match[1],
      });
    }
  }

  // Sort by position
  matches.sort((a, b) => a.index - b.index);

  // Build result by processing text segments
  let lastIndex = 0;

  for (const matchItem of matches) {
    // Add plain text before this match
    if (matchItem.index > lastIndex) {
      const plainText = text.substring(lastIndex, matchItem.index);
      parts.push(plainText);
    }

    // Add the matched element
    if (matchItem.type === 'link' && matchItem.href) {
      parts.push(
        <Link key={`${keyPrefix}link-${keyCounter++}`} href={matchItem.href} className="text-amber-400 hover:text-amber-300 underline">
          {matchItem.content}
        </Link>
      );
    } else if (matchItem.type === 'strong') {
      parts.push(<strong key={`${keyPrefix}strong-${keyCounter++}`}>{matchItem.content}</strong>);
    }

    lastIndex = matchItem.index + matchItem.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // If no matches, return text as is
  if (matches.length === 0) {
    return text;
  }

  return <>{parts}</>;
}

