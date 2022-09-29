import Index from "../models/Skills";

export interface ListRequest<T, S = never> {
  page?: number;
  size?: number;
  search?: string;
  ordering?: string;
  expand?: T;
  filters?: S;
}

export interface SkillsReadRequest {
  id: Index["id"];
}
