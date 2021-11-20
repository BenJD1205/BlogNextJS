import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_CMS

export default async function comments (req, res) {

  const graphQLCLIENT = new GraphQLClient(graphqlAPI, {
    headers:{
      authorization:`Bearer ${graphcmsToken}`
    }
  })

  const query = gql`
    mutation CreateComment($name:String!, $email:String!, $comment:String!, $slug:String!){
      createComment(data:{name:$name,email:$email, comment:$comment, post:{connect:{slug:$slug}}}){
        id
      }
    }
  `

  try{
    const result = await graphQLCLIENT.request(query, req.body)
    return res.status(200).send(result);
  }catch(err){
    console.log(err)
    return res.status(500).send(err);
  }
}
