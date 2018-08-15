[Sidekiq](//github.com/mperham/sidekiq) needs to be backed with [Redis](//redis.io), and while it's perfectly straightforward to install and run Redis directly on a Respberry Pi, that would be to miss another tremendous over-engineering opportunity. So we're running it in a [Docker](//www.docker.com) container, using [docker-compose.yml](//docs.docker.com/compose/)

Attempts were made to manage this with [Kubernetes](//kubernetes.io) but it turns out it's quite tricky to run a single-node Raspberry Pi k8s cluster
