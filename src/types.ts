export enum ViewType {
    Esm = "esm",
    Iframe = "iframe",
}

export interface FormField {
    title?: string;
    type: string;
    description: string;
}
  
export interface FormSchema {
    [key: string]: FormField;
}

export interface InputSchema {
    description: string;
    required: string[];
    properties: FormSchema;
}

export interface ViewDisplay {
    title: string;
    iconURL?: string;
    position: number;
    column: number;
    expand?: boolean;
    height?: number;
}

export interface ViewRendering {
    type: ViewType;
    source: {
        url: string;
    };
    additionalData?: Record<string, unknown>;
}

export interface ViewInputHandler {
    id: string;
    name: string;
    description: string;
    type: string;
}

export interface IncomingEdge {
    edgeId: string;
    sourceHandleId: string;
    targetHandleId: string;
    sourceBlockId: string;
    targetBlockId: string;
}

export interface ViewConfig {
    id: string;
    schemaVersion: string;
    display: ViewDisplay;
    rendering: ViewRendering;
    metadata: Record<string, unknown>;
    inputHandlers: ViewInputHandler[];
    schema?: Record<string, unknown>;
}

export interface Workspace {
    id: string;
    mode: string;
}

export interface AgentTask {
    description: string;
    id: string;
    name: boolean;
}

export interface AgentTool {
    description: string;
    id: string;
    name: string;
}

export interface AgentInputData {
    schema: Record<string, unknown>;
    data: Record<string, unknown>;
}

export interface AgentNode {
    agentId: string;
    name: string;
    description?: string;
    displayName: string;
    iconUrl?: string;
    input_schema: InputSchema;
    llm?: string;
    output_schema: Record<string, unknown>;
    system_prompt?: string;
    tools?: AgentTool[];
    tasks?: AgentTask[];
}


export interface IHostData {
    blockId?: string;
    projectId?: string;
    project?: { id?: string };
    workspace?: Workspace;
    client?: { id?: string };
    appConfig?: ViewConfig;
    incomingEdges?: IncomingEdge[];
    agentNodes?: AgentNode[];
}

