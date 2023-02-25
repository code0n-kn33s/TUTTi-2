const api_js = [
  {
      title: 'nbu',
      subtitle: 'курсы валют',
      text: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
      code: `
        {
          "r030":36,"txt":"Австралійський долар","rate":24.3199,"cc":"AUD","exchangedate":"24.11.2022"
         }
      `,
  },
  {
      title: 'nbu',
      subtitle: 'резервы',
      text: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/res?date=201708&json',
      code: `
        {
          dt : "20170801" freq : "M" id_api : "RES_Gold" leveli : 2 parent : "RES_OffReserveAssets" txt : "Золото" txten : "Gold" tzep : "T071USD_7" value : 1030.4
         }
      `,
  },

]
