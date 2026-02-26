import { StreamingChannel } from "./StreamingChannel";
export interface Movie {
 id: number;
 title: string;
 description: string;
 streamingChannel: StreamingChannel;
}
