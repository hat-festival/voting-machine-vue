# Voting Machine

## Over-engineering at its absolute finest

Since the dawn of history, one question has troubled the minds of the greatest thinkers: Would you rather fight one hundred duck-sized horses, or one horse-sized duck?

We have set out to answer this once and for all, in the most ridiculous way we could think of. It has far, far too many layers:

---

### REST API

There's a simple [Sinatra](//sinatrarb.com/) [JSON API](//github.com/hat-festival/voting-machine) which exposes (amongst other things)

* a `GET` endpoint for the question data
* a `POST` endpoint which collects the votes, and
* a `PATCH` endpoint to adjust the difficulty of the Equestreum blockchain (see below)

The votes are shovelled onto a [Sidekiq](//sidekiq.org/) queue - Sidekiq requires [Redis](//redis.io/), and the easiest way to run a Redis server is using

---

### Docker

There is a [docker-compose.yml](//docs.docker.com/compose/) file which launches a Redis Docker container to support the Sidekiq queue. Attempts were made to manage this with [Kubernetes](//kubernetes.io) but it turns out it's quite tricky to run a single-node Raspberry Pi k8s cluster

---

### Blockchain

The votes are plucked off of the Sidekiq queue and added to the [Equestreum](//github.com/hat-festival/equestreum) blockchain. A new block is mined for each vote, and the API sports `GET` endpoints that give the aggregate voting data as well as exposing the entire chain

There are currently no fucking cryptocoins being mined here, but it's surely only a matter of time before our big ICO

---

### VueJS front-end

The [single-page application](//github.com/hat-festival/voting-machine-vue) presents a very simple voting interface
