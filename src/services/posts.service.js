import request, { gql } from "graphql-request";

export const API_URL =
  "https://api-us-west-2.hygraph.com/v2/clnbhv98k8jva01uk4eza7t6t/master";

export const PostsService = {
  async fetchAllPosts() {
    const req = gql`
      query Posts {
        posts {
          title
          content {
            html
          }
          excerpt
          image {
            url
          }
          id
          author {
            fullName
            avatar {
              url
            }
            id
            bio
          }
        }
      }
    `;

    const data = await request(API_URL, req);

    return data;
  },
  async fetchPostDetails(id) {
    const req = gql`
      query Posts($id: ID) {
        posts(where: { id: $id }) {
          title
          excerpt
          createdAt
          image {
            url
          }
          author {
            fullName
            id
            bio
            avatar {
              url
            }
          }
          id
          content {
            html
          }
        }
      }
    `;

    const data = await request(API_URL, req, { id: id });

    return data;
  },
};
