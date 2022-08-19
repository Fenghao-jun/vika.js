export interface INodeItem {
  id: string;
  name: string;
  type: NodeType,
  icon: string;
  isFav: boolean;
}

export const enum NodeType {
  'Datasheet',
  'Mirror',
  'Folder',
  'Form',
  'Dashboard'
}

export interface IGetNodeListReqParams {
  spaceId: string
}
export type IGetNodeListResponseData = {
  nodes: INodeItem[]
}

export interface IGetNodeDetailReqParams {
  spaceId: string
  nodeId: string
}

export interface IGetNodeDetailResponseData extends INodeItem {
  children?: INodeItem[];
}