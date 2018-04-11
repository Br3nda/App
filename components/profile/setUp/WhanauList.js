import Header from '../../genApp/Header'
import Menu from '../../genApp/Menu'

const WhanauList = () => (
  <div class='content'>
    <div class='center'>
      <Header />
      <Menu />
      <h1 class='sm narrow-down-only'>Whānau</h1>
      <section class='card'>
        <header class='condensed'>
          <h2>Lisefski House</h2>
          <h4>Whānau</h4>
        </header>
        <table>
          <tbody>
            <tr>
              <td class='unbreak'>amber@wharehauora.nz</td>
              <td class='actions'>
                <a class='table-action del' href='#'><img class='svg' src='../../../static/img/icon/del.svg' alt='remove' /></a>
              </td>
            </tr>
            <tr class='spacer'><td colspan='100'></td></tr>
            <tr>
              <td class='unbreak'>brenda@wallace.net.nz</td>
              <td class='actions'>
                <a class='table-action del' href='#'><img class='svg' src='../../../static/img/icon/del.svg' alt='remove' /></a>
              </td>
            </tr>
            <tr class='spacer'><td colspan='100'></td></tr>
            <tr>
              <td class='unbreak'>hiriaterangi@gmail.com</td>
              <td class='actions'>
                <a class='table-action del' href='#'><img class='svg' src='../../../static/img/icon/del.svg' alt='remove' /></a>
              </td>
            </tr>
            <tr class='spacer'><td colspan='100'></td></tr>
          </tbody>
        </table>
        <a class='btn-add append-table open-modal' href='#' data-mfp-src='#add-whanau'><img class='svg' src='../../../static/img/icon/btn-add.svg' alt='icon' />Add whānau</a>
      </section>
    </div>
  </div>
)

export default WhanauList
