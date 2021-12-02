module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/matthewtmurray/chop-ui",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
      ]
}