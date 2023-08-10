import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
;

const findAll = async (event:APIGatewayProxyEvent,context:Context) => {
  const {awsRequestId} =context
  const {name}= JSON.parse(event.body) as {name:string}
  return formatJSONResponse({
    message: `Hello ${name}, welcome to the exciting Serverless world!`,
    awsRequestId,
  });
};

export const main = findAll;
