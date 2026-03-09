export default {
  methods: {
    $entryGtm(options) {
      const defaultOptions = {
        event: 'extra-gtm.click',
        category: '',
        action: '',
        label: ''
      }

      // console.log({ ...defaultOptions, ...options })

      this.$gtm.push({
        ...defaultOptions,
        ...options
      })
    },
    formatStorageDate(date) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')

      return `${year}-${month}-${day}`
    },
    getLatestToolValues(storedValues) {
      const source =
        storedValues && typeof storedValues === 'object'
          ? storedValues
          : (this.$localStorage ? this.$localStorage.get('$toolValues') : null)

      if (!source || typeof source !== 'object') {
        return {}
      }

      if (Array.isArray(source.history) && source.history.length > 0) {
        const latest = source.history[0]
        if (latest && latest.values && typeof latest.values === 'object') {
          return { ...latest.values }
        }
      }

      const { history, date, ...plainValues } = source
      return plainValues
    },
    setToolValues(values) {
      if (!values || typeof values !== 'object') {
        return
      }

      const stored = this.$localStorage.get('$toolValues')
      const history = stored && Array.isArray(stored.history) ? [...stored.history] : []
      const date = this.formatStorageDate(new Date())
      const snapshot = JSON.parse(JSON.stringify(values))
      const entry = {
        date,
        values: snapshot
      }
      const sameDateIndex = history.findIndex((item) => item && item.date === date)

      if (sameDateIndex >= 0) {
        history.splice(sameDateIndex, 1, entry)
      } else {
        history.unshift(entry)
      }

      if (history.length > 2) {
        history.length = 2
      }

      const latestEntry = history[0]

      this.$localStorage.set('$toolValues', {
        date: latestEntry && latestEntry.date ? latestEntry.date : date,
        history
      })

    }
  }
}
