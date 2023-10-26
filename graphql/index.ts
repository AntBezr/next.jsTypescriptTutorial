export const getUserQuery = `
query getUser($email: String!){
  user(by:{email:$email}){
    id
    name
    email
    avatarUrl
    description
    gitHubUrl
    linkedInUrl
  }
}
`

export const createUserMutation = `
mutation CreateUser($input: CreateUserInput!){
  userCreate(input: $input){
    user{
      name
      email
      avatarUrl
      description
      gitHubUrl
      linkedInUrl
      id
    }
  }
}
`