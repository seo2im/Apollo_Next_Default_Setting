# Apollo & Mongo & Next Basic setting

해당 repository는 기본적인 웹 서비스를 구성할 때, 최소한의  BackEnd / FrontEnd 셋팅 위해 만들어진 repository 입니다.

This repository is for making BackEnd / FrontEnd basic setting when make default web service.

## BACKEND

### 사전 준비
1. 개인의 MongoDB를 가지고 있어야 합니다.
    - 해당 repo에는 Mongo DB를 만드는 과정은 들어있지 않습니다. 따라서 로컬 혹은 MongoDB가 구축된 서버를 가지고 연결을 해야합니다.
    - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_south_korea_search_core_brand_atlas_desktop&utm_term=mongo&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624365&gclid=EAIaIQobChMIoqeO27i77wIVCsEWBR2F2QXkEAAYASAAEgLkCPD_BwE)를 활용하거나 [local에 설치](https://docs.mongodb.com/manual/tutorial/getting-started/)하고 진행하시길 바랍니다.

### 실행
```bash
npm install ; npm start
```

서비스 실행 후 `gql playground`(http://localhost:4000/graphql)에서 본인의 query/mutation을 실행해 볼 수 있습니다. 사용법은 [여기](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/)를 참고하시기 바랍니다.

### Preference
1. Must have personal mongoDB.
    - This repo have no way to construct mongoDB. So you have to connect local MongoDB or Server constructed MongoDB.
    - Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_south_korea_search_core_brand_atlas_desktop&utm_term=mongo&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624365&gclid=EAIaIQobChMIoqeO27i77wIVCsEWBR2F2QXkEAAYASAAEgLkCPD_BwE), or [install local](https://docs.mongodb.com/manual/tutorial/getting-started/)
### Run
```
npm install ; npm start
```

When start service, exec your query / mutation in `gql playground`(http://localhost:4000/graphql). Refer to [this](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/) for guide of this