import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
;

const findById = async (event:APIGatewayProxyEvent,context:Context) => {
  const {awsRequestId} =context
  //const {name}= JSON.parse(event.body) as {name:string}
  const {id}=event.pathParameters
  const {age}=event.queryStringParameters

  return formatJSONResponse({
    message: `Hello ${id}, welcome to the exciting Serverless world! ${age}`,
    awsRequestId,
  });
};

export const main = findById;
