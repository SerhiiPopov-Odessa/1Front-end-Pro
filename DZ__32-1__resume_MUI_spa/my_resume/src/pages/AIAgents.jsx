
import ChatWidget from '../components/ChatWidget';

const AIAgents = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700/75 text-center mb-4 font-semibold bg-amber-300 rounded-2xl px-8 shadow-lg shadow-amber-400/50">AI Agents</h1>
        <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl  mb-4 shadow-lg shadow-lime-300/50">OpenAI Agents SDK, Work with LLM API, Function Calling and Tool Design, Model Context Protocol (MCP) and built-in tools, Conversation State and Memory, RAG (Retrieval Augmented Generation), Agent Loop and ReAct Pattern, Workflows and multi-agent systems, LangChain, LangGraph, AI Security and MCP Security, PostgreSQL + pgvector (HNSW, cosine) + tsvector/GIN, React UI and Streaming (SSE)</p>
        <div className="flex w-full justify-center" >
         <ChatWidget inline/>
        </div>
      </div>
    </>
  );
};

export default AIAgents;
