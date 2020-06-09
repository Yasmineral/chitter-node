const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)
const models = require('../database/models')
const db = require('../database/models/index')

afterAll(done => {
  db.sequelize.close();
  done();
})

describe('Register', () => {
  it('gets the register endpoint', async done => {
    const response = await request.get('/register')
    expect(response.status).toBe(200)
    done()
  })
  it('fails to post with missing credentials', async done => {
    const user = {name: '', email: '', password: ''};
    await request.post('/register', user)
    .expect(401);
    done();
  })
  it('fails to post with incorrect credentials', async done => {
    const user = {name: 'Yas Kemp', email: 'email', password: 'test12345'};
    await request.post('/register', user)
    .expect(401);
    done();
  })
it('saves user to database when valid credentials are posted', async done => {
  const req = {name: 'Yas Kemp', email: 'yas@test.com', password: 'testPassword'};
  await request.post('/register').send(req)
  const user = await models.User.findOne({ 
    where: {email: 'yas@test.com'}
  });
  expect(user.name).toBeTruthy();
  expect(user.email).toBeTruthy();
  done();
})
})
