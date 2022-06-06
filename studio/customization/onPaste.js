// code for editing paste handler globally. It didn't work at all when tried. Not sure why.
// Could revisit this method after the single PT test works.
// This sheet needs to be called implementation on sanity.json that code has been removed as you cannot comment out things in a JSON file

/* eslint-disable */
import blockTools from '@sanity/block-tools';

export default function handlePaste(input) {
  const { event } = input;
  const text = event.clipboardData.getData('text/plain');
  const json = event.clipboardData.getData('application/json');
  if (json) {
    console.log(json);
  }
  if (text) {
    console.log(text);
  }
  // return undefined to let the defaults do the work
  return undefined;
}
