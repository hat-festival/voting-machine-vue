# Voting Machine

## Over-engineering at its absolute finest

Since the dawn of history, one question has troubled the minds of the greatest thinkers: Would you rather fight one hundred duck-sized horses, or one horse-sized duck?

We have set out to answer this once and for all, in the most ridiculous way we could think of. It has far, far too many layers:

---

### REST API

There's a simple [Sinatra](//sinatrarb.com/) [JSON API](//github.com/hat-festival/voting-machine) which exposes a `GET` endpoint for the question data, and a `POST` endpoint which collects the votes and shovels them onto a [Sidekiq](//sidekiq.org/) queue. Sidekiq requires [Redis](//redis.io/), and the easiest way to run a Redis server is using

---

### Docker

There is a [docker-compose.yml](https://docs.docker.com/compose/) file which launches a Redis Docker container to support the Sidekiq queue. Attempts were made to manage this with [Kubernetes](//kubernetes.io) but it turns out it's quite tricky to run a single-node Raspberrry Pi k8s cluster

---

### Blockchain

All these votes backing-up on the Sidekiq queue need to go somewhere, and where better in 2018 than onto a [Blockchain](//yukimotopress.github.io/programming-blockchains-step-by-step)?

We've not actually implemented this yet but we are planning an ICO for later in the year

---

### Bothan

When we worked at the [Open Data Institute](//theodi.org), we built a tool called [Bothan](//bothan.io). This is the obvious choice for visualising the votes stored in the Blockchain

This requires [MongoDB](//mongodb.com), which will also be run in a Docker container

---

### VueJS front-end

The [single-page application](//github.com/hat-festival/voting-machine-vue) presents a very simple voting interface

---
