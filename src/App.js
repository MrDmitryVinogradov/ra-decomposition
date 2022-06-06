import './App.css';
import MainLogo from './components/MainLogo'
import MarketQuotes from './components/MarketQuotes'
import Menu from './components/Menu'
import NewsBody from './components/NewsBody'
import NewsHeader from './components/NewsHeader'
import SearchBox from './components/SearchBox'
import Card from './components/Card'
import Banner from './components/Banner'

function App() {

  const newsProps = {
    position: 'В Германии',
    date: '31 июля, среда',
    time: '02:32'
  }

  const news =  [
      {
        logo: 'https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1391858429430542344%2FZzlHOgCc_400x400.jpg',
        text: 'Путин упростил получение автомобильных номеров'
      },
      {
        logo: 'https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1391858429430542344%2FZzlHOgCc_400x400.jpg',
        text: 'В команде Зеленского раскрыли план реформ на Украине'
      },
      {
        logo: 'https://www.oreol.tv/img/bez_nazvaniya.jpg',
        text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье'
      },
      {
        logo: 'https://www.fbras.ru/wp-content/uploads/2020/01/900px-Logo-Kommersant_Kommersa--nt\'.svg_.png',
        text: 'Суд закрыл дело Демпартии США против России'
      },
      {
        logo: 'https://soft.softodrom.ru/screens/soft/86/23619/1985913784.png',
        text: 'На Украине призвали создать ракеты для удара по Москве'
      }
  ]
  
  const cardProps = {
    img: 'https://i.pinimg.com/236x/6d/2b/8e/6d2b8e8194c20fce975c719e8337c353.jpg?nii=t',
    header: 'Работа над ошибками',
    body: 'Смотрите на Яндексе и запоминайте'
  }

  const quotesProps = [
    {
      ticker: 'USD MOEX',
      price: '63,52',
      change: '+0,09'
    },
    {
      ticker: 'EUR MOEX',
      price: '70,86',
      change: '+0,14'
    },
    {
      ticker: 'НЕФТЬ',
      price: '64,90',
      change: '+1,63%'
    },
  ]

  const mainLogo = 'https://logos-marcas.com/wp-content/uploads/2021/04/Yandex-nuevo-logotipo.jpg'

  const menuItems = ['Видео', 'Картинки' , 'Новости' , 'Карты' , 'Маркет', 'Переводчик', 'Эфир', 'еще' ]
  
  const placeholder = 'фаза луны сегодня'

  const banner = 'http://anapacomp.ru/wp-content/uploads/2016/11/cropped-2-4.jpg'

  return (
    <div className='App'>
      <div className='page-header'>
        <div className='news-wrapper'>
          <NewsHeader props={newsProps} /> 
          <NewsBody news = {news} />
        </div>
        <Card props={cardProps}/>
      </div>
      <MarketQuotes quotes={quotesProps} />
      <div className='search-wrapper'>
        <MainLogo img={mainLogo} />
        <div className='search-group'>
          <Menu items={menuItems} />
          <SearchBox placeholder={placeholder} />
          <Banner img={banner}/>
        </div>
      </div>
    </div>
  );
}

export default App;
