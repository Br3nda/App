import Header from '../../genApp/Header'
import Menu from '../../genApp/Menu'

const WhanauList = () => (
  <div className='content'>
    <div className='center'>
      <Header />
      <Menu />
      <h1 className='sm narrow-down-only'>Whānau</h1>
      <section className='card'>
        <header className='condensed'>
          <h2>Lisefski House</h2>
          <h4>Whānau</h4>
        </header>
        <table>
          <tbody>
            <tr>
              <td className='unbreak'>amber@wharehauora.nz</td>
              <td className='actions'>
                <a className='table-action del' href='#'><img className='svg' src='../../../static/img/icon/del.svg' alt='remove' /></a>
              </td>
            </tr>
            <tr className='spacer'><td colspan='100'></td></tr>
            <tr>
              <td className='unbreak'>brenda@wallace.net.nz</td>
              <td className='actions'>
                <a className='table-action del' href='#'><img className='svg' src='../../../static/img/icon/del.svg' alt='remove' /></a>
              </td>
            </tr>
            <tr className='spacer'><td colspan='100'></td></tr>
            <tr>
              <td className='unbreak'>hiriaterangi@gmail.com</td>
              <td className='actions'>
                <a className='table-action del' href='#'><img className='svg' src='../../../static/img/icon/del.svg' alt='remove' /></a>
              </td>
            </tr>
            <tr className='spacer'><td colspan='100'></td></tr>
          </tbody>
        </table>
        <a className='btn-add append-table open-modal' href='#' data-mfp-src='#add-whanau'><img className='svg' src='../../../static/img/icon/btn-add.svg' alt='icon' />Add whānau</a>
      </section>
    </div>
  </div>
)

export default WhanauList
