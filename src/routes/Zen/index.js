import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'zen',
  getComponent(nextState, next) {
    require.ensure([
      './containers/ZenContainer',
      './modules/zen'
    ], (require) => {
      const Zen = require('./containers/ZenContainer').default
      const zenReducer = require('./modules/counter').default

      injectReducer(store, { key: 'zen', zenReducer })
      next(null, Zen)
    })
  }
});
