import { Document } from './document';
export interface PostMarshaller {
    postMarshal(doc: Document): void;
}
