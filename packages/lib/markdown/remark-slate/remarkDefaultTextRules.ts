import { MARK_BOLD, MARK_CODE, MARK_ITALIC } from '@udecode/plate-basic-marks'
import { Value } from '@udecode/slate'
import { getPluginType } from '@udecode/plate-core'

import { RemarkTextRules } from './types'

export const remarkDefaultTextRules: RemarkTextRules<Value> = {
  text: {},
  emphasis: { mark: ({ editor }) => getPluginType(editor, MARK_ITALIC) },
  strong: { mark: ({ editor }) => getPluginType(editor, MARK_BOLD) },
  inlineCode: { mark: ({ editor }) => getPluginType(editor, MARK_CODE) },
  html: { transform: (text: string) => text.replaceAll('<br>', '\n') },
}
