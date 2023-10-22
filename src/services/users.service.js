import request, { gql } from "graphql-request";
import { API_URL } from "./posts.service";

export const fetchAllUsers = async () => {
  const req = gql`
    query Authors {
      authors {
        fullName
        id
        avatar {
          url
        }
        bio
      }
    }
  `;
  const data = await request(API_URL, req);
  return data;
};

export const getSingleAuthorData = async (id) => {
  const req = gql`
    query Authors($id: ID) {
      authors(where: { id: $id }) {
        fullName
        id
        avatar {
          url
        }
        bio
        posts {
          title
          excerpt
          id
          image {
            url
          }
          createdAt
          author {
            fullName
            avatar {
              url
            }
          }
        }
      }
    }
  `;

  const data = await request(API_URL, req, { id });
  return data;
};
