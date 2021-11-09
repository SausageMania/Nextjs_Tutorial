# Next.js 연습용 프로젝트

## Next.js의 강점
React를 통해 SSR(서버사이드 렌더링)을 가능하게 해준다.  
이를 통해 SEO(검색엔진 최적화)를 가능하게 해주며 렌더링이 Server와 Client에 분배되어 로딩 속도가 빠르다.  

## create-react-app을 통한 React와 다른 점
1. *import React from 'react'를 작성할 필요가 없다.*  
  Next.js에서 알아서 추가해주는 듯 하다. 물론 useEffect, useState 등은 따로 작성해야 한다.  
  
2. *react-router-dom으로 페이지를 연결하지 않고, pages 폴더에서 컴포넌트를 가져와서 사용한다.*  
  가령 /product/:id 형태의 path에 들어가려면 pages/product/[id].js 파일을 추가하면 된다.  
  
3. *getServerSideProps vs getStaticProps*  
  getServerSideProps를 통해 Server에서 데이터를 가져올 수 있다. 이는 Rest API 및 GraphQL 통신 때 굉장히 유용할 듯 하다.  
  또한 이를 통해 query를 가져올 수 있다. (혹은 useRouter를 사용해도 된다.). 
  getStaticProps는 빌드 될때 딱 한번만 실행되기에 값이 바뀌지 않는 페이지에서 유용할 듯 하다.  
  과거에는 getInitialProps를 사용했으나 v9부터 분리됐다고 한다. 
  
  4. *_app.js / _document.js*  
    _app.js는 React의 App.js와 유사하여, 모든 컴포넌트에 상태값을 전달하거나 css를 삽입할 때 작성한다.    
    _document.js는 기본 HTML 형태를 변경할 때 유용하다. (가령 title을 바꾸거나, lang을 설정할 때)  
    
<hr/>

```
현재는 아주 기본적인 문법만 익힌 상태로, CSR의 단점을 극복하고 SSR을 장점을 취한 Next.js를 계속 공부할 예정이다.  
개인 프로젝트에서 Typescript, emotion과 함께 사용할 계획이다.  
```
