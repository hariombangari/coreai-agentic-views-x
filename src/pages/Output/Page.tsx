import { Logger } from "../../components/Logger";
import { withHost } from "../../hoc/withHost";
import type { WrappedComponentProps } from "../../hoc/withHost";

export function Output(props: WrappedComponentProps) {
  const { hostData, incomingData } = props;
  const { agentNodes } = hostData || {};
  const names = agentNodes?.map((node) => node.displayName) || []; 
  console.log("X Output:: Host Data", hostData);
  console.log("X Output:: Incoming Data", incomingData);
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Output Page</h1>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        {names.map((name) => <div key={name}>Agent: {name}</div>)}
      </div>
      <Logger hostData={hostData} incomingData={incomingData} />
    </div>
  );
}

const OutputPage = withHost(Output);

export default OutputPage;
