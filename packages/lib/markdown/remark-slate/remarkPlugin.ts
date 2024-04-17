import { Value } from '@udecode/slate'

import { remarkTransformNode } from './remarkTransformNode'
import { MdastNode, RemarkPluginOptions } from './types'

export function remarkPlugin<V extends Value>(options: RemarkPluginOptions<V>) {
  let lastLineNumber = 1
  const compiler = (node: { children: Array<MdastNode> }) => {
    return node.children.flatMap((child) => {
      const parsedChild = remarkTransformNode(child, lastLineNumber, options)
      lastLineNumber = child.position?.end.line || lastLineNumber
      return parsedChild
    })
  }

  // @ts-ignore
  this.Compiler = compiler
}
