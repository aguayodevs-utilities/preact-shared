
export interface Chatbot {
  _id: string;
  name: string;
  description: string;
  path: string;
  image: string;
  modelid: string;
  status: "active" | "inactive";
  instructions: string;
  createdAt?: Date;
  updatedAt?: Date;
}