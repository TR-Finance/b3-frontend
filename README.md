## Developer Quick Start

1. (Only required if you modified the contracts) Re-deploy the contracts from their [project](https://github.com/TR-Finance/bridge-back-better). Then update `src/constants/addresses.ts` with their new addresses, and copy over their ABIs into `src/abis`.

2. Set the environment variables -- make a `.env` file and copy the contents of `.env.example` into it. Replace the API keys with your own.

3. Install dependencies, compile typings for the contracts, and start the local server.

```sh
cd frontend
npm install
npm contracts:compile
npm start
```

4. Open [http://localhost:3000/](http://localhost:3000/) to see the frontend. You will
   need to set Metamask to use Rinkeby.
