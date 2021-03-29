/** @jsx jsx */

import { jsx } from '@udecode/slate-plugins-test-utils';
import { Editor } from 'slate';
import { options } from '../../../../../../stories/config/pluginOptions';
import { withNormalizeTypes } from '../../../createNormalizeTypesPlugin';

jsx;

const input = (
  <editor>
    <hh1>test</hh1>
  </editor>
) as any;

const output = (
  <editor>
    <hh1>test</hh1>
    <hh2>
      <htext />
    </hh2>
  </editor>
) as any;

it('should be', () => {
  const editor = withNormalizeTypes({
    rules: [{ path: [1], strictType: options.h2.type }],
  })(input as Editor);

  editor.normalizeNode([input, []]);

  expect(input.children).toEqual(output.children);
});
