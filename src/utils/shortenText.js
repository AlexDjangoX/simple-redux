export const shortenText = (text, maxLength) => {
  // No need to shorten if the text is already within the limit
  if (text.length <= maxLength) {
    return text;
  }

  // Get the substring of the first maxLength characters
  let shortenedText = text.slice(0, maxLength);

  // Find the last occurrence of a full stop within the substring
  const lastFullStopIndex = shortenedText.lastIndexOf('.');

  if (lastFullStopIndex !== -1) {
    // Include the text up to and including the full stop
    shortenedText = shortenedText.slice(0, lastFullStopIndex + 1);
  } else {
    // If there is no full stop, find the last occurrence of a space within the substring
    const lastSpaceIndex = shortenedText.lastIndexOf(' ');

    if (lastSpaceIndex !== -1) {
      // Include the text up to the last space
      shortenedText = shortenedText.slice(0, lastSpaceIndex).concat(' ...');
    }
  }

  return shortenedText;
};
