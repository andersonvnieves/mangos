#Command to run aws cloudfront 


aws cloudformation deploy \
  --template-file ./infrastructure/templates/frontend-stack.yaml \
  --stack-name mangos-frontend-stack \
  --parameter-overrides Environment=dev \
  --region sa-east-1 \
  --no-fail-on-empty-changeset



  aws cloudformation describe-stack-events --stack-name mangos-frontend-stack