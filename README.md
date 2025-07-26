# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


JG.repeat(5, 10, {
  id: JG.objectId(),
  email() {
    return (
      _.snakeCase(this.profile.name) +
      '@' +
      this.profile.company +
      JG.domainZone()
    ).toLowerCase();
  },
  username() {
    return (_.words(this.profile.name)[0] + moment(this.profile.dob).format('YY')).toLowerCase();
  },
  profile: {
    name: `${JG.firstName()} ${JG.lastName()}`,
    company: JG.company(),
    dob: moment(JG.date(new Date(1988, 0, 1), new Date(1995, 0, 1))).format('YYYY-MM-DD'),
    address: `${JG.integer(1, 100)} ${JG.street()}, ${JG.city()}, ${JG.state()}`,
    location: {
      lat: JG.floating(-90, 90, 6),
      long: JG.floating(-180, 180, 6),
    },
    about: JG.loremIpsum({ units: 'sentences', count: 2 }),
  },
  apiKey: JG.guid(),
  roles: _.uniq(JG.repeat(2, JG.random('owner', 'admin', 'member', 'guest'))),
  createdAt: JG.date(new Date(2010, 0, 1), new Date(2015, 0, 1)),
  updatedAt() {
    return moment(this.createdAt).add(1, 'days');
  },
});
