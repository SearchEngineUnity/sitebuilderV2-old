// component used to render textPT for the paste handling test

/* eslint-disable */
// CustomRichTextEditor.js
import React from 'react';
import { BlockEditor } from 'part:@sanity/form-builder';
import blockTools from '@sanity/block-tools';
import { nanoid } from 'nanoid';

function handlePaste(input) {
  const { event, type, path } = input;
  const text = event.clipboardData.getData('text/plain');
  const html = event.clipboardData.getData('text/html');
  const json = event.clipboardData.getData('application/json');
  console.log(blockTools.getBlockContentFeatures(type));
  if (html) {
    console.log(html);

    const blocks = blockTools.htmlToBlocks(html, type, {
      rules: [
        {
          deserialize(el, next, block) {
            if (el.tagName.toLowerCase() !== 'a') return undefined;
            console.log(next(el.childNodes));
            const href = el.getAttribute('href');
            if (!href) {
              return next(el.childNodes);
            }
            console.log(href);
            const markDef = {
              _key: nanoid(),
              _type: 'externalLink',
              href,
              newTab: true,
              noreferrer: false,
            };

            return {
              _type: '__annotation',
              markDef,
              children: next(el.childNodes),
            };
          },
        },
      ],
    });
    return { insert: blocks, path };
  }

  // return undefined to let the defaults do the work
  return undefined;
}

export default class CustomEditor extends React.PureComponent {
  render() {
    return (
      <div>
        <BlockEditor {...this.props} onPaste={handlePaste} />
      </div>
    );
  }
}
