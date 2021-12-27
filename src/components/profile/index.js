import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as St from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <St.Wrapper>
      <St.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <St.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <St.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </St.WrapperUserGeneric>
          <St.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </St.WrapperUserGeneric>
          <St.WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </St.WrapperUserGeneric>
          <St.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </St.WrapperUserGeneric>
        </div>
        <St.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </St.WrapperStatusCount>
      </St.WrapperInfoUser>
    </St.Wrapper>
  );
};

export default Profile;
