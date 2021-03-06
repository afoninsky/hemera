'use strict'

describe('Extension Async / Await', function() {
  var PORT = 6242
  var authUrl = 'nats://localhost:' + PORT
  var server

  // Start up our own nats-server
  before(function(done) {
    server = HemeraTestsuite.start_server(PORT, done)
  })

  // Shutdown our server after we are done
  after(function() {
    server.kill()
  })

  it('Should be able to reply an error in onServerPreHandler', function(done) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onServerPreHandler', async function(ctx, req, res) {
        ext1()
        res.send(new Error('test'))
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })

  it('Should be able to reject an error in onServerPreHandler', function(done) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onServerPreHandler', async function(ctx, req, res) {
        ext1()
        return new Error('test')
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })

  it('Should be able to reply an error in onServerPreRequest', function(done) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onServerPreRequest', async function(ctx, req, res) {
        ext1()
        res.send(new Error('test'))
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })

  it('Should be able to reject an error in onServerPreRequest', function(done) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onServerPreRequest', async function(ctx, req, res) {
        ext1()
        return new Error('test')
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })

  it('Should be able to reply an error in onServerPreResponse', function(done) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onServerPreResponse', async function(ctx, req, res) {
        ext1()
        res.send(new Error('test'))
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })

  it('Should be able to reject an error in onServerPreResponse', function(
    done
  ) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onServerPreResponse', async function(ctx, req, res) {
        ext1()
        return new Error('test')
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })

  it('Should be able to reply an error in onClientPreRequest', function(done) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onClientPreRequest', async function(ctx) {
        ext1()
        res.send(new Error('test'))
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })

  it('Should be able to reject an error in onClientPreRequest', function(done) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onClientPreRequest', async function(ctx) {
        ext1()
        return new Error('test')
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })

  it('Should be able to reply an error in onClientPostRequest', function(done) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onClientPostRequest', async function(ctx) {
        ext1()
        res.send(new Error('test'))
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })

  it('Should be able to reject an error in onClientPostRequest', function(
    done
  ) {
    let ext1 = Sinon.spy()

    const nats = require('nats').connect(authUrl)

    const hemera = new Hemera(nats)

    hemera.ready(() => {
      hemera.ext('onClientPostRequest', async function(ctx) {
        ext1()
        return new Error('test')
      })

      hemera.add(
        {
          topic: 'email',
          cmd: 'send'
        },
        (resp, cb) => {
          cb()
        }
      )

      hemera.act(
        {
          topic: 'email',
          cmd: 'send'
        },
        (err, resp) => {
          expect(ext1.called).to.be.equals(true)
          expect(err).to.be.exists()
          hemera.close(done)
        }
      )
    })
  })
})
