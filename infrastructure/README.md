#Command to run aws cloudfront 


aws cloudformation deploy \
  --template-file /Users/anderson/Repos/mangos/infrastructure/templates/frontend-stack.yaml \
  --stack-name mangos-frontend-stack \
  --parameter-overrides Environment=dev \
  --region sa-east-1



  aws cloudformation describe-stack-events --stack-name mangos-frontend-stack