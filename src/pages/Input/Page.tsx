import { withHost } from "../../hoc/withHost";
import type { WrappedComponentProps } from "../../hoc/withHost";
import { Logger } from "../../components/Logger";
import FormInput from "../../components/FormInput";

export function Input(props: WrappedComponentProps) {
  const { hostData, incomingData, sendOutput } = props;
  console.log("X Input:: Host Data", hostData);
  console.log("X Input:: Incoming Data", incomingData);
  const agentNode = hostData?.agentNodes?.[0];
  const agentInputSchema = agentNode?.input_schema;

  const handleSubmit = (values: Record<string, string>) => {
    sendOutput?.("x1-input-handler-1", values);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">X1 Input</h1>
      <div className="space-y-4">
        {agentInputSchema && <FormInput schema={agentInputSchema} onSubmit={handleSubmit} />}
      </div>

      <Logger hostData={hostData} incomingData={incomingData} />
    </div>
  );
}
  
const InputPage = withHost(Input);

export default InputPage;