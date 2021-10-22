export default {
  methods: {
    $entryGtm(options) {
      const defaultOptions = {
        event: 'extra-gtm.click',
        category: '',
        action: '',
        label: '',
      }

      // console.log({ ...defaultOptions, ...options })

      this.$gtm.push({
        ...defaultOptions,
        ...options,
      })
    },
  },
}
