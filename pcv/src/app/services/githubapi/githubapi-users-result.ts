export class GithubapiSingleUserResult {
    login: String;
    id: Number;
    node_id: String;
    avatar_url: String;
    gravatar_id: String;
    url: String;
    // there are more properties but I'm only adding what I'm using
    constructor(_avatar_url: String) {
        this.avatar_url = _avatar_url;
    }
}