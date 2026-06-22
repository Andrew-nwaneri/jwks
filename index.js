export default {
  async fetch(request) {
    return new Response(JSON.stringify({
      keys: [
            {
      "kty": "RSA",
      "n": "nuJSZ62lvIgb51Q9S4TzK6VqJmR4OqZ1yh8hcrLTPlYxa6AVQdwL1-NgW26AE9PxSQsy15yaaIVuaR6_frIxQlHLEzSXwZxYU80VplXOu2cvaKjmPT71CF7bnegAg1zRuKdVSUm6R58vq7uaGf173i3P2e-bPZYF5R1VIdzgkwm-hg10hZJg2S8ngNFfBiV3T-Op028GkE-kQkk1l7EscWZTkf0hd90G3CfsvyztnPzHFq33NzELOrD-vQmQyWep-K2uJzN8O30M1Kuu5CJEzgevzYXeeTxA1YsPGeGSSNPEm4S7ZqVA0aJiLM1VQG47h9KXB1nAuSXQMKvarnZXFw",
      "e": "AQAB",
      "use": "sig",
      "alg": "RS384",
      "kid": "openemr-key-1"
    }
      ]
    }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
