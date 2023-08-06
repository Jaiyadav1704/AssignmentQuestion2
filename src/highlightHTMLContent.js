import React from 'react'

export default function highlightHTMLContent(htmlContent, plainText, plainTextPosition) {
 
    let highlightedContent = htmlContent;
  
    plainTextPosition.forEach(position => {
        const startTag = '<mark>';
        const endTag = '</mark>';
        
        const plainTextStart = position.start;
        const plainTextEnd = position.end;
        
        // Calculate the corresponding positions in the HTML content
        const highlightStart = highlightedContent.indexOf(plainText.substring(plainTextStart, plainTextEnd));
        const highlightEnd = highlightStart + (plainTextEnd - plainTextStart);
        
        // Apply the highlight tags to the HTML content
        highlightedContent = highlightedContent.slice(0, highlightStart) + startTag +
                            highlightedContent.slice(highlightStart, highlightEnd) + endTag +
                            highlightedContent.slice(highlightEnd);
    });
    
    return highlightedContent;
        
}
