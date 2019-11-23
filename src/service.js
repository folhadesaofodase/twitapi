import Twit from "twit";
import messageGen from './messageGenerator'

const twit = new Twit({
  consumer_key: "...",
  consumer_secret: "...",
  access_token: "...",
  access_token_secret: "...",
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: false // optional - requires SSL certificates to be valid.
});

async function tweet(obj) {
	return new Promise(resolve => {
		twit.post("statuses/update", { status: messageGen(obj) }, (err, data, response) => {
				console.log(err)

				resolve(true)
			}
		);
	})
  
}

export default { tweet };
