/* /////////////////////////////////
          Whare Hauora Web App CSS (SCSS)
          by Benek Lisefski
          http://benek.nz
          ///////////////////////////////// */
/* /////////////////////////////////
          Resets & Fixes
          ///////////////////////////////// */
import css from "styled-jsx/css";

export default css`
        * {
          margin: 0;
          padding: 0;
        }

        article, aside, details, figcaption, figure, footer, header, hgroup, nav, section, summary {
          display: block;
        }

        audio, canvas, video {
          display: inline-block;
          *display: inline;
          *zoom: 1;
        }

        body {
          font-smoothing: antialiased;
          -webkit-font-smoothing: antialiased;
          -moz-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -o-font-smoothing: antialiased;
        }

        b, strong {
          font-weight: bold;
        }

        h1, h2, h3, h4, h5, h6 {
          font-weight: normal;
        }

        a:active, a:hover, a:focus {
          outline: 0;
        }

        sub, sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sup {
          top: -0.5em;
        }

        sub {
          bottom: -0.25em;
        }

        img, a img {
          border: 0;
          color: white;
          -ms-interpolation-mode: bicubic;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        fieldset {
          border: 0;
          margin: 0;
          padding: 0;
        }

        textarea {
          resize: none;
        }

        textarea {
          overflow: hidden;
        }

        input:focus, select:focus, textarea:focus {
          outline: 0;
        }

        input[type=search] {
          -webkit-appearance: textfield;
        }

        ::-webkit-search-cancel-button {
          display: none;
        }

        .gradient {
          -webkit-filter: none;
          filter: none;
        }

        body {
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }

        svg {
          display: block;
        }

        /* /////////////////////////////////
        Variables
        ///////////////////////////////// */
        /* /////////////////////////////////
        Mixins
        ///////////////////////////////// */
        /* /////////////////////////////////
        Layout Helpers
        ///////////////////////////////// */
        .ir,
        .logo,
        .logo-sm {
          background-color: transparent;
          border: 0;
          display: block;
          overflow: hidden;
          text-indent: -1000em;
        }

        .clearfix:after,
        .readings:after,
        .rating:after,
        .card > footer:after,
        .summary-grid:after,
        .card.report:after,
        .card.report .report-card:after,
        .card.pre-log:after,
        .card.pre-log .text > footer:after,
        .form-row:after,
        .sensor-alerts li:after,
        .modal > footer:after {
          content: ".";
          display: block;
          height: 0;
          line-height: 0;
          clear: both;
          visibility: hidden;
        }

        .clearfix,
        .readings,
        .rating,
        .card > footer,
        .summary-grid,
        .card.report,
        .card.report .report-card,
        .card.pre-log,
        .card.pre-log .text > footer,
        .form-row,
        .sensor-alerts li,
        .modal > footer {
          zoom: 1;
          /* for IE */
        }

        /* /////////////////////////////////
        Responsive Helpers
        ///////////////////////////////// */
        .narrow-down-only {
          display: none;
        }

        @media (max-width: 1199px) {
          .narrow-down-only {
            display: block;
          }
        }

        .mob-only {
          display: none;
        }

        @media (max-width: 699px) {
          .mob-only {
            display: block;
          }
        }

        @media (max-width: 699px) {
          .mob-hide {
            display: none;
          }
        }

        /* /////////////////////////////////
        Large sections & containers
        (See also _nav)
        ///////////////////////////////// */
        html {
          background: #f8f7f6;
        }

        body {
          background: #f8f7f6;
          min-width: 320px;
          overflow-x: hidden;
          overflow-y: auto;
          position: relative;
        }

        @media (max-width: 1199px) {
          body.menu-is-open {
            max-height: 100vh;
            overflow-y: hidden;
          }
        }

        .content {
          margin: 0 0 0 10%;
          padding: 60px 0px 30px;
        }

        @media (max-width: 1199px) {
          .content {
            margin-left: 0;
            margin-top: 56px;
            padding: 38px 36px 14px;
          }
        }

        @media (max-width: 699px) {
          .content {
            margin-top: 150px;
            padding: 16px 16px 0;
          }
        }

        .center {
          margin: 0 auto;
          max-width: 1280px;
        }

        body.pre-log .content {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          margin-left: 0 !important;
          margin-top: 0 !important;
          min-height: 100vh;
          overflow: hidden;
          padding: 0 60px;
          position: relative;
          z-index: 0;
        }

        @media (max-width: 1199px) {
          body.pre-log .content {
            padding: 0 36px;
          }
        }

        @media (max-width: 699px) {
          body.pre-log .content {
            padding: 0 16px;
          }
        }

        body.pre-log .center {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          max-width: 1040px;
          min-height: 100vh;
          overflow: hidden;
          padding-bottom: 54px;
          position: relative;
          z-index: 2;
        }

        body.pre-log .center .header {
          position: relative;
          z-index: 2;
        }

        @media (max-width: 699px) {
          body.pre-log .center {
            padding-bottom: 34px;
          }
        }

        body.pre-log .img-full {
          background-color: #f8f7f6;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          bottom: 0;
          height: 60vh;
          left: 0;
          position: absolute;
          right: 0;
          width: 100%;
          z-index: 1;
        }

        body.pre-log .img-full:after {
          background: -o-linear-gradient(top, #f8f7f6 0%, rgba(248, 247, 246, 0) 100%);
          background: -webkit-gradient(linear, left top, left bottom, from(#f8f7f6), to(rgba(248, 247, 246, 0)));
          background: linear-gradient(to bottom, #f8f7f6 0%, rgba(248, 247, 246, 0) 100%);
          content: "";
          height: 30vh;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 1;
        }

        body.empty .content {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          z-index: 0;
        }

        body.empty .center {
          position: relative;
          z-index: 2;
        }

        body.empty .empty-text p {
          margin: 12px 0 0 0;
          max-width: 640px;
        }

        body.empty .empty-text .btn {
          margin: 24px 0 0 0;
        }

        @media (max-width: 699px) {
          body.empty .empty-text {
            padding: 0 8px;
          }
          body.empty .empty-text .btn {
            margin-top: 20px;
          }
        }

        body.empty .img-full {
          background-color: #f8f7f6;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          bottom: 0;
          height: 60vh;
          left: 0;
          position: absolute;
          right: 0;
          width: 100%;
          z-index: 1;
        }

        body.empty .img-full:after {
          background: -o-linear-gradient(top, #f8f7f6 0%, rgba(248, 247, 246, 0) 100%);
          background: -webkit-gradient(linear, left top, left bottom, from(#f8f7f6), to(rgba(248, 247, 246, 0)));
          background: linear-gradient(to bottom, #f8f7f6 0%, rgba(248, 247, 246, 0) 100%);
          content: "";
          height: 30vh;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 1;
        }

        @media (max-width: 699px) {
          body.empty .img-full {
            height: 50vh;
          }
          body.empty .img-full:after {
            height: 25vh;
          }
        }

        /* /////////////////////////////////
        Type
        ///////////////////////////////// */
        body {
          font: 400 16px/28px "Roboto", sans-serif;
          color: #333;
          text-align: left;
        }

        h1 {
          color: #777;
          font: 300 36px/42px "Roboto", sans-serif;
          margin: 0 0 48px 0;
        }

        h1.lg {
          color: #333;
          font-size: 48px;
          line-height: 56px;
          margin-bottom: 4px;
          text-align: center;
        }

        h1.sm {
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          margin: -12px 0 24px 0;
        }

        @media (max-width: 1199px) {
          h1 {
            margin-bottom: 38px;
          }
        }

        @media (max-width: 699px) {
          h1 {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            margin-bottom: 16px;
            padding-left: 8px;
          }
          h1.lg {
            font-size: 24px;
            font-weight: 300;
            line-height: 30px;
            margin-bottom: 0;
            padding-left: 0;
          }
          h1.sm {
            margin: 0 0 16px 0;
          }
        }

        h2 {
          margin: 0;
          font: 700 24px/30px "Merriweather", serif;
          color: #333;
        }

        @media (max-width: 699px) {
          h2.secondary {
            font-size: 18px;
            line-height: 24px;
          }
        }

        h2.accent {
          color: #abcc75;
        }

        h2 .sensor {
          margin: -4px 12px;
          position: relative;
          top: -3px;
        }

        h3 {
          margin: 0;
          font: 700 18px/24px "Merriweather", serif;
          color: #333;
        }

        h3 .sensor {
          margin: -3px 12px;
          position: relative;
          top: -2px;
        }

        h4 {
          margin: 0;
          font: 400 14px/22px "Roboto", sans-serif;
          color: #777;
        }

        h4.lg {
          font-size: 16px;
          line-height: 28px;
          text-align: center;
        }

        @media (max-width: 699px) {
          h4.lg {
            font-size: 14px;
            line-height: 22px;
          }
        }

        h5 {
          margin: 0;
          font: 400 12px/18px "Roboto", sans-serif;
          color: #777;
        }

        h6 {
          margin: 0;
          font: 700 11px/13px "Roboto", sans-serif;
          color: #333;
          text-transform: uppercase;
          letter-spacing: .1em;
        }

        p {
          margin: 24px 0 0 0;
        }

        p.sm {
          margin-top: 18px;
          font-size: 14px;
          line-height: 22px;
        }

        @media (max-width: 699px) {
          p {
            margin-top: 18px;
            font-size: 14px;
            line-height: 22px;
          }
          p.sm {
            margin-top: 16px;
            font-size: 12px;
            line-height: 18px;
          }
        }

        p.light,
        span.light {
          color: #777;
        }

        ul,
        ol {
          color: #777;
          font-size: 14px;
          line-height: 22px;
          margin: 24px 0 0 0;
        }

        ul > li,
        ol > li {
          margin-bottom: 10px;
        }

        ul > li:last-child,
        ol > li:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 699px) {
          ul,
          ol {
            margin-top: 20px;
          }
        }

        ul > li {
          list-style: none;
          padding-left: 30px;
          background: transparent url("../static/img/bullet.svg") no-repeat 3px 8px;
        }

        ul.check > li {
          background: transparent url("../static/img/bullet-check.svg") no-repeat left 6px;
        }

        ul.check > li.bullet {
          background: transparent url("../static/img/bullet.svg") no-repeat 3px 8px;
        }

        ul.check > li.none {
          background-image: none;
        }

        ol {
          margin-left: 16px;
        }

        ol > li {
          padding-left: 14px;
        }

        label,
        dt {
          display: block;
          margin: 0;
          font: 700 11px/13px "Roboto", sans-serif;
          color: #333;
          text-transform: uppercase;
          letter-spacing: .1em;
        }

        label.hidden {
          visibility: hidden;
        }

        @media (max-width: 699px) {
          label.hidden {
            display: none !important;
            margin: 0;
            padding: 0;
          }
        }

        dl {
          margin: 24px 0 0 0;
          font-size: 12px;
          line-height: 18px;
          color: #777;
        }

        dl dt {
          margin-bottom: 2px;
        }

        dl dd {
          margin-bottom: 16px;
        }

        dl dd:last-child {
          margin-bottom: 0;
        }

        dl.col4 {
          -webkit-column-count: 4;
          -moz-column-count: 4;
          column-count: 4;
          -webkit-column-width: 25%;
          -moz-column-width: 25%;
          column-width: 25%;
        }

        dl.col4 dd {
          margin-bottom: 0;
        }

        @media (max-width: 699px) {
          dl {
            margin-top: 20px;
          }
          dl.col4 {
            margin-right: -12px;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
            -webkit-column-width: 50%;
            -moz-column-width: 50%;
            column-width: 50%;
          }
          dl.col4 dd {
            margin-bottom: 0;
          }
          dl.col4 dd:nth-child(4n+2) {
            margin-bottom: 16px;
          }
        }

        b,
        strong {
          font-weight: 700;
        }

        /* /////////////////////////////////
        Logo
        ///////////////////////////////// */
        .logo {
          width: 117px;
          height: 60px;
          background: transparent url("../static/img/logo.svg") no-repeat left top;
        }

        .logo-sm {
          width: 174px;
          height: 17px;
          float: left;
          background: transparent url("../static/img/logo-sm.svg") no-repeat left top;
        }

        /* /////////////////////////////////
        Header (tablet down)
        ///////////////////////////////// */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          height: 56px;
          padding: 19px 36px 0;
          background: #fff;
          border-bottom: solid 1px rgba(0, 0, 0, 0.04);
          background-clip: padding-box;
        }

        @media (min-width: 1200px) {
          .header {
            display: none;
          }
        }

        @media (max-width: 699px) {
          .header {
            margin-top: 0em;
            height: 44px;
            padding: 1em 24px 0;
          }
        }

        .open-menu {
          float: right;
          margin-top: 2px;
          height: 14px;
          line-height: 14px;
        }

        .open-menu .label {
          display: inline-block;
          vertical-align: middle;
          padding-right: 14px;
          font-size: 14px;
          line-height: 14px;
          color: #777;
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .open-menu img,
        .open-menu svg {
          display: inline-block;
          vertical-align: middle;
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch .open-menu:hover .label {
          color: #333;
        }

        .no-touch .open-menu:hover svg path {
          fill: #191919;
        }

        .open-menu:active .label {
          color: #000;
        }

        .open-menu:active svg path {
          fill: #000;
        }

        @media (max-width: 699px) {
          .open-menu {
            margin-top: 1px;
          }
          .open-menu .label {
            display: none;
          }
        }

        /* /////////////////////////////////
        Nav Panel
        ///////////////////////////////// */
        .menu {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          z-index: 102;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 280px;
          background: #fff;
          border-right: solid 1px rgba(0, 0, 0, 0.04);
          background-clip: padding-box;
        }

        .menu > header {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          height: 120px;
          margin: 0 18px;
          padding: 30px 12px;
          border-bottom: solid 1px rgba(0, 0, 0, 0.06);
        }

        .menu > header h6 {
          color: #abcc75;
          padding-top: 22px;
          display: none;
        }

        .menu > header .x {
          position: absolute;
          top: 21px;
          right: 30px;
          z-index: 1;
          width: 14px;
          height: 14px;
          display: none;
        }

        .menu > header .selectboxit-container {
          width: calc(100% + 48px);
          margin: 20px -24px 0;
          position: relative;
          z-index: 0;
        }

        .menu > footer {
          position: fixed;
          bottom: 0;
          left: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 280px;
          height: 56px;
          padding: 0 30px;
          background: #fff;
        }

        .menu > footer .selectboxit-container {
          width: calc(100% + 36px);
          margin: 6px -18px;
        }

        .menu > footer:before {
          content: "";
          position: absolute;
          top: -24px;
          left: 0;
          right: 0;
          height: 24px;
          background: -webkit-gradient(linear, left bottom, left top, from(white), to(rgba(255, 255, 255, 0)));
          background: -o-linear-gradient(bottom, white 0%, rgba(255, 255, 255, 0) 100%);
          background: linear-gradient(to top, white 0%, rgba(255, 255, 255, 0) 100%);
        }

        .menu > footer:after {
          content: "";
          position: absolute;
          top: -1px;
          left: 18px;
          right: 18px;
          height: 1px;
          border-bottom: solid 1px rgba(0, 0, 0, 0.06);
        }

        .menu .nav {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 24px 0 24px;
          height: calc(100vh - 176px);
          overflow-y: scroll;
        }

        .ie .menu .nav .nav-links:last-child {
          margin-bottom: 24px;
        }

        .menu .nav h6 {
          margin: 30px 0 8px;
          padding: 0 0 0 30px;
        }

        .menu.multi-whare > header {
          height: 164px;
        }

        .menu.multi-whare .nav {
          height: calc(100vh - 220px);
        }

        /* /////////////////////////////////
        Tab / Mob Menu
        ///////////////////////////////// */
        @-webkit-keyframes overlay-in {
          0% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
          1% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes overlay-in {
          0% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
          1% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }

        @-webkit-keyframes overlay-out {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
          99% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes overlay-out {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
          99% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @-webkit-keyframes menu-in {
          0% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes menu-in {
          0% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }

        @-webkit-keyframes menu-out {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes menu-out {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @media (max-width: 1199px) {
          .overlay {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 101;
            background: rgba(248, 247, 246, 0.8);
            -webkit-transform: translateX(100%);
            -ms-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
          .menu-is-open .overlay {
            -webkit-animation: overlay-in .3s;
            animation: overlay-in .3s;
            -webkit-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
          .menu-is-closing .overlay {
            -webkit-animation: overlay-out .3s;
            animation: overlay-out .3s;
            -webkit-transform: translateX(100%);
            -ms-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .menu-is-open .menu {
          -webkit-animation: menu-in .3s;
          animation: menu-in .3s;
          -webkit-transform: translateX(0);
          -ms-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }

        .menu-is-closing .menu {
          -webkit-animation: menu-out .3s;
          animation: menu-out .3s;
          -webkit-transform: translateX(100%);
          -ms-transform: translateX(100%);
          transform: translateX(100%);
          opacity: 0;
        }

        @media (max-width: 1199px) {
          .menu {
            left: auto;
            right: 0;
            width: calc(50% + 1px);
            border-right: 0;
            border-left: solid 1px rgba(0, 0, 0, 0.04);
            -webkit-transform: translateX(100%);
            -ms-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
          .menu > header {
            height: 56px;
            padding: 0 12px;
          }
          .menu > header .logo {
            display: none;
          }
          .menu > header h6 {
            display: block;
          }
          .menu > header .x {
            display: block;
          }
          .menu > header .selectboxit-container {
            width: calc(100% - 20px);
            margin-top: 0;
            top: 8px;
          }
          .menu > footer {
            left: auto;
            right: 0;
            width: 100%;
          }
          .menu .nav {
            height: calc(100vh - 112px);
            padding-bottom: 96px;
          }
          .menu.multi-whare > header {
            height: 56px;
          }
          .menu.multi-whare .nav {
            height: calc(100vh - 112px);
            padding-bottom: 48px;
          }
        }

        @media (max-width: 699px) {
          .menu {
            left: 0;
            width: 100%;
            border-left: 0;
          }
          .menu > header {
            height: 44px;
            margin: 0 16px;
            padding: 0 14px;
          }
          .menu > header h6 {
            padding-top: 16px;
          }
          .menu > header .x {
            top: 15px;
            right: 24px;
          }
          .menu > header .selectboxit-container {
            margin-top: 0;
            top: 0;
          }
          .menu > header .selectboxit-container .selectboxit-btn.whare-picker .selectboxit-text {
            font-size: 14px !important;
          }
          .menu > footer {
            left: 0;
            width: 100%;
            height: 44px;
            padding: 0 26px;
          }
          .menu > footer:after {
            left: 16px;
            right: 16px;
          }
          .menu > footer .selectboxit-container {
            margin: 0 -18px;
          }
          .menu .nav {
            height: calc(100vh - 88px);
            padding-bottom: 96px !important;
          }
          .menu.multi-whare > header {
            height: 44px;
          }
          .menu.multi-whare .nav {
            height: calc(100vh - 88px);
          }
        }

        /* /////////////////////////////////
        Pre-login header
        ///////////////////////////////// */
        body.pre-log .header {
          position: static;
          height: auto;
          padding: 60px 0 48px 0;
          background: transparent;
          border-bottom: 0;
          display: block !important;
          text-align: center;
        }

        body.pre-log .header .logo {
          margin: 0 auto 30px;
        }

        body.pre-log .header .btn {
          margin: 32px auto;
        }

        @media (max-width: 699px) {
          body.pre-log .header {
            padding: 13px 0 16px 0;
          }
          body.pre-log .header .logo {
            width: 174px;
            height: 17px;
            margin: 0 auto 18px;
            background: transparent url("../static/img/logo-sm.svg") no-repeat left top;
          }
          body.pre-log .header .btn {
            margin: 24px auto;
          }
        }

        body.pre-log footer.lang {
          position: absolute;
          left: 50%;
          bottom: 18px;
          width: 320px;
          height: 44px;
          margin-left: -184px;
        }

        body.pre-log footer.lang h6 {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          float: left;
          width: 50%;
          height: 44px;
          line-height: 46px;
          text-align: right;
          overflow: hidden;
        }

        body.pre-log footer.lang .selectboxit-container {
          float: right;
          width: 50%;
        }

        @media (max-width: 699px) {
          body.pre-log footer.lang {
            bottom: 2px;
          }
        }

        /* /////////////////////////////////
        Text Links
        ///////////////////////////////// */
        a:link,
        a:visited {
          color: #333;
          text-decoration: none;
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch a:link:hover, .no-touch
        a:visited:hover {
          color: #191919;
          text-decoration: none;
        }

        .no-touch a:link:active, .no-touch
        a:visited:active {
          color: #000;
          text-decoration: none;
        }

        a.underline {
          position: relative;
          display: inline-block;
          font-size: 14px;
          line-height: 22px;
          font-weight: 700;
        }

        a.underline:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 2px;
          height: 0;
          border-bottom: solid 1px #333;
        }

        .no-touch a.underline:hover:after {
          border-bottom-color: #191919;
        }

        .no-touch a.underline:active:after {
          border-bottom-color: #000;
        }

        /* /////////////////////////////////
        Buttons
        ///////////////////////////////// */
        a.btn {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: inline-block;
          height: 44px;
          padding: 0 24px;
          font-size: 14px;
          line-height: 44px;
          color: #fff;
          background: #333;
          border-radius: 3px;
          overflow: hidden;
        }

        a.btn img,
        a.btn svg {
          display: inline-block;
          vertical-align: middle;
          margin-left: -4px;
          margin-right: 10px;
          position: relative;
          top: -1px;
        }

        a.btn img path,
        a.btn svg path {
          fill: #fff;
        }

        .no-touch a.btn:hover {
          color: #fff;
          background: #191919;
        }

        .no-touch a.btn:active {
          color: #fff;
          background: #000;
        }

        a.btn.disabled {
          background: rgba(0, 0, 0, 0.16);
          cursor: not-allowed;
        }

        .no-touch a.btn.disabled:hover {
          background: rgba(0, 0, 0, 0.16);
        }

        .no-touch a.btn.disabled:active {
          background: rgba(0, 0, 0, 0.16);
        }

        a.btn.icon-only img,
        a.btn.icon-only svg {
          margin: 0 -4px;
        }

        a.btn.small {
          height: 32px;
          padding: 0 18px;
          line-height: 32px;
        }

        a.btn.alert {
          background: #ea6720;
        }

        .no-touch a.btn.alert:hover {
          background: #d7550f;
        }

        .no-touch a.btn.alert:active {
          background: #c24a0a;
        }

        a.btn.alert.disabled {
          background: rgba(0, 0, 0, 0.16);
        }

        .no-touch a.btn.alert.disabled:hover {
          background: rgba(0, 0, 0, 0.16);
        }

        .no-touch a.btn.alert.disabled:active {
          background: rgba(0, 0, 0, 0.16);
        }

        a.btn-add {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          height: 52px;
          padding: 0 30px;
          font-size: 14px;
          line-height: 52px;
          font-weight: bold;
          color: #abcc75;
          background: transparent;
          border: solid 1px rgba(0, 0, 0, 0.06);
          border-radius: 5px;
          overflow: hidden;
        }

        a.btn-add.append-table {
          margin-bottom: 6px;
        }

        a.btn-add.append-card {
          margin-bottom: 30px;
        }

        a.btn-add.append-top {
          margin-bottom: 24px;
        }

        a.btn-add.append-middle {
          margin-top: 24px;
          margin-bottom: 24px;
        }

        a.btn-add img,
        a.btn-add svg {
          display: inline-block;
          vertical-align: middle;
          margin-right: 16px;
          position: relative;
          top: -1px;
        }

        a.btn-add img path,
        a.btn-add svg path {
          fill: #abcc75;
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch a.btn-add:hover {
          color: #96b85c;
          border: solid 1px rgba(0, 0, 0, 0.08);
        }

        .no-touch a.btn-add:hover svg path {
          fill: #96b85c;
        }

        .no-touch a.btn-add:active {
          color: #86ab4a;
          border: solid 1px rgba(0, 0, 0, 0.16);
        }

        .no-touch a.btn-add:active svg path {
          fill: #86ab4a;
        }

        @media (max-width: 1199px) {
          a.btn-add.append-card {
            margin-bottom: 24px;
          }
        }

        @media (max-width: 699px) {
          a.btn-add {
            height: 44px;
            line-height: 44px;
            padding: 0 14px;
          }
          a.btn-add img,
          a.btn-add svg {
            margin-right: 10px;
          }
          a.btn-add.append-table {
            margin-left: -12px;
            margin-right: -12px;
          }
          a.btn-add.append-card {
            margin-bottom: 16px;
            padding: 0 26px;
          }
          a.btn-add.append-top {
            margin-left: -12px;
            margin-right: -12px;
            margin-bottom: 20px;
          }
          a.btn-add.append-middle {
            margin-top: 20px;
            margin-left: -12px;
            margin-right: -12px;
            margin-bottom: 20px;
          }
        }

        /* /////////////////////////////////
        Icon Links
        ///////////////////////////////// */
        a.head-action {
          display: block;
        }

        a.head-action svg path {
          fill: rgba(0, 0, 0, 0.16);
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch a.head-action:hover svg path {
          fill: rgba(0, 0, 0, 0.24);
        }

        .no-touch a.head-action:active svg path {
          fill: rgba(0, 0, 0, 0.32);
        }

        a.head-action.inv svg path {
          fill: rgba(255, 255, 255, 0.5);
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch a.head-action.inv:hover svg path {
          fill: rgba(255, 255, 255, 0.75);
        }

        .no-touch a.head-action.inv:active svg path {
          fill: white;
        }

        a.i {
          display: inline-block;
          vertical-align: middle;
          width: 16px;
          height: 16px;
          margin-left: 6px;
          position: relative;
          top: -1px;
        }

        a.i img, a.i svg {
          display: inline-block;
        }

        a.i img path, a.i svg path {
          fill: rgba(0, 0, 0, 0.16);
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch a.i:hover svg path {
          fill: rgba(0, 0, 0, 0.24);
        }

        .no-touch a.i:active svg path {
          fill: rgba(0, 0, 0, 0.32);
        }

        a.del {
          display: inline-block;
          height: 18px;
          font-size: 14px;
          line-height: 18px;
          font-weight: bold;
          color: #ea6720;
        }

        a.del img,
        a.del svg {
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
          position: relative;
          top: -1px;
        }

        a.del svg path {
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch a.del:hover {
          color: #d7550f;
        }

        .no-touch a.del:hover svg path {
          fill: #d7550f;
        }

        .no-touch a.del:active {
          color: #c24a0a;
        }

        .no-touch a.del:active svg path {
          fill: #c24a0a;
        }

        a.del.table-action svg {
          margin-right: 0 !important;
        }

        a.cancel {
          display: inline-block;
          height: 18px;
          font-size: 14px;
          line-height: 18px;
          font-weight: bold;
          color: #777;
        }

        .no-touch a.cancel:hover {
          color: #333;
        }

        .no-touch a.cancel:active {
          color: #000;
        }

        a.edit.table-action svg path {
          fill: #abcc75;
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch a.edit.table-action:hover svg path {
          fill: #96b85c;
        }

        .no-touch a.edit.table-action:active svg path {
          fill: #86ab4a;
        }

        a.back {
          display: inline-block;
          vertical-align: middle;
          width: 19px;
          height: 14px;
          margin-right: 18px;
          position: relative;
          top: -3px;
        }

        a.back img, a.back svg {
          display: inline-block;
        }

        a.back img path, a.back svg path {
          fill: rgba(0, 0, 0, 0.16);
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch a.back:hover svg path {
          fill: rgba(0, 0, 0, 0.24);
        }

        .no-touch a.back:active svg path {
          fill: rgba(0, 0, 0, 0.32);
        }

        /* /////////////////////////////////
        Pagination
        ///////////////////////////////// */
        .pagination {
          margin: 24px 0 6px;
          text-align: center;
          font-size: 0;
          line-height: 0;
        }

        .pagination .btn {
          margin: 0 4px !important;
          vertical-align: middle;
        }

        .pagination .pages {
          display: inline-block;
          vertical-align: middle;
          margin: 0 20px;
        }

        .pagination .pages a {
          position: relative;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: inline-block;
          vertical-align: middle;
          height: 44px;
          width: 44px;
          font-size: 14px;
          line-height: 44px;
          color: #777;
          border: solid 1px rgba(0, 0, 0, 0.06);
          border-right: 0;
        }

        .pagination .pages a:first-child {
          border-radius: 3px 0 0 3px;
        }

        .pagination .pages a:last-child {
          border-right: solid 1px rgba(0, 0, 0, 0.06);
          border-radius: 0 3px 3px 0;
        }

        .pagination .pages a.current {
          font-weight: 700;
          color: #333;
        }

        @media (max-width: 699px) {
          .pagination {
            margin: 20px -4px 0;
          }
          .pagination .btn {
            display: inline-block !important;
            width: calc(50% - 8px);
            margin: 0 4px 6px !important;
          }
          .pagination .pages {
            margin: 12px 0 18px 0;
          }
        }

        /* /////////////////////////////////
        Sensor pill
        ///////////////////////////////// */
        span.sensor,
        a.sensor {
          display: inline-block;
          height: 32px;
          padding: 0 16px;
          font-family: "Roboto", sans-serif !important;
          font-size: 14px;
          line-height: 32px;
          font-weight: 700;
          color: #fff;
          background: #abcc75;
          border-radius: 16px;
        }

        .no-touch a.sensor:hover {
          background: #96b85c;
        }

        .no-touch a.sensor:active {
          background: #86ab4a;
        }

        /* /////////////////////////////////
        Loader
        ///////////////////////////////// */
        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -6px 0 0 -6px;
          display: block;
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.16);
          border-radius: 50%;
          -webkit-animation: load-bounce .8s ease 0s infinite;
          animation: load-bounce .8s ease 0s infinite;
        }

        @-webkit-keyframes load-bounce {
          0%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
          }
          50% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes load-bounce {
          0%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
          }
          50% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }
        }

        /* /////////////////////////////////
        Default Reading Structure
        ///////////////////////////////// */
        .readings {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          margin: 30px 0 0;
        }

        .reading {
          float: left;
        }

        .reading .vis {
          position: relative;
          display: block;
          width: 72px;
          height: 72px;
          margin-bottom: 12px;
          border-radius: 50%;
          -webkit-transition: background-color ease .3s;
          -o-transition: background-color ease .3s;
          transition: background-color ease .3s;
          background: #4d9d2e;
        }

        .reading .value {
          font-size: 36px;
          line-height: 42px;
          font-weight: bold;
          letter-spacing: -.05em;
          -webkit-transition: color ease .3s;
          -o-transition: color ease .3s;
          transition: color ease .3s;
          margin-left: -1px;
          color: #4d9d2e;
        }

        @media (max-width: 699px) {
          .reading .value {
            font-size: 32px;
            line-height: 38px;
          }
        }

        .reading .label {
          display: block;
          margin: 8px 0 0;
          font: 700 11px/13px "Roboto", sans-serif;
          color: #333;
          text-transform: uppercase;
          letter-spacing: .1em;
          -webkit-transition: color ease .3s;
          -o-transition: color ease .3s;
          transition: color ease .3s;
        }

        @media (max-width: 699px) {
          .reading .label {
            margin-top: 4px;
          }
        }

        .reading .time {
          display: block;
          margin-top: 2px;
          font-size: 12px;
          line-height: 18px;
          color: #777;
        }

        /* /////////////////////////////////
        Temperature Scale
        ///////////////////////////////// */
        .reading.temp-high-2b .vis {
          background: #e38e14 url("../static/img/scale/temp-high-2b.svg") no-repeat center center;
        }

        .reading.temp-high-2b .value {
          color: #e38e14;
        }

        .reading.temp-high-2a .vis {
          background: #e38e14 url("../static/img/scale/temp-high-2a.svg") no-repeat center center;
        }

        .reading.temp-high-2a .value {
          color: #e38e14;
        }

        .reading.temp-high-1b .vis {
          background: #e0b50a url("../static/img/scale/temp-high-1b.svg") no-repeat center center;
        }

        .reading.temp-high-1b .value {
          color: #e0b50a;
        }

        .reading.temp-high-1a .vis {
          background: #e0b50a url("../static/img/scale/temp-high-1a.svg") no-repeat center center;
        }

        .reading.temp-high-1a .value {
          color: #e0b50a;
        }

        .reading.temp-mid-b .vis {
          background: #4d9d2e url("../static/img/scale/temp-mid-b.svg") no-repeat center center;
        }

        .reading.temp-mid-b .value {
          color: #4d9d2e;
        }

        .reading.temp-mid-a .vis {
          background: #4d9d2e url("../static/img/scale/temp-mid-a.svg") no-repeat center center;
        }

        .reading.temp-mid-a .value {
          color: #4d9d2e;
        }

        .reading.temp-low-1a .vis {
          background: #2d8d73 url("../static/img/scale/temp-low-1a.svg") no-repeat center center;
        }

        .reading.temp-low-1a .value {
          color: #2d8d73;
        }

        .reading.temp-low-1b .vis {
          background: #2d8d73 url("../static/img/scale/temp-low-1b.svg") no-repeat center center;
        }

        .reading.temp-low-1b .value {
          color: #2d8d73;
        }

        .reading.temp-low-2a .vis {
          background: #356bb5 url("../static/img/scale/temp-low-2a.svg") no-repeat center center;
        }

        .reading.temp-low-2a .value {
          color: #356bb5;
        }

        .reading.temp-low-2b .vis {
          background: #356bb5 url("../static/img/scale/temp-low-2b.svg") no-repeat center center;
        }

        .reading.temp-low-2b .value {
          color: #356bb5;
        }

        /* /////////////////////////////////
        Humidity Scale
        ///////////////////////////////// */
        .reading.hum-high-2b .vis {
          background: #13a3bd url("../static/img/scale/hum-high-2b.svg") no-repeat center center;
        }

        .reading.hum-high-2b .value {
          color: #13a3bd;
        }

        .reading.hum-high-2a .vis {
          background: #13a3bd url("../static/img/scale/hum-high-2a.svg") no-repeat center center;
        }

        .reading.hum-high-2a .value {
          color: #13a3bd;
        }

        .reading.hum-high-1b .vis {
          background: #30a076 url("../static/img/scale/hum-high-1b.svg") no-repeat center center;
        }

        .reading.hum-high-1b .value {
          color: #30a076;
        }

        .reading.hum-high-1a .vis {
          background: #30a076 url("../static/img/scale/hum-high-1a.svg") no-repeat center center;
        }

        .reading.hum-high-1a .value {
          color: #30a076;
        }

        .reading.hum-mid-b .vis {
          background: #4d9d2e url("../static/img/scale/hum-mid-b.svg") no-repeat center center;
        }

        .reading.hum-mid-b .value {
          color: #4d9d2e;
        }

        .reading.hum-mid-a .vis {
          background: #4d9d2e url("../static/img/scale/hum-mid-a.svg") no-repeat center center;
        }

        .reading.hum-mid-a .value {
          color: #4d9d2e;
        }

        /* /////////////////////////////////
        Dewpoint Scale
        ///////////////////////////////// */
        .reading.dew-high-2 .vis {
          background: #13a3bd url("../static/img/scale/dew-high-2.svg") no-repeat center calc(50% - 1px);
        }

        .reading.dew-high-2 .value {
          color: #13a3bd;
        }

        .reading.dew-high-1 .vis {
          background: #30a076 url("../static/img/scale/dew-high-1.svg") no-repeat center calc(50% - 1px);
        }

        .reading.dew-high-1 .value {
          color: #30a076;
        }

        .reading.dew-mid .vis {
          background: #4d9d2e url("../static/img/scale/dew-mid.svg") no-repeat center calc(50% - 1px);
        }

        .reading.dew-mid .value {
          color: #4d9d2e;
        }

        /* /////////////////////////////////
        Expired
        ///////////////////////////////// */
        .reading.expired .vis,
        .expired .reading .vis {
          background-color: rgba(0, 0, 0, 0.16) !important;
        }

        .reading.expired .value,
        .expired .reading .value {
          color: rgba(0, 0, 0, 0.16) !important;
        }

        .reading.expired .label,
        .expired .reading .label {
          color: #777;
        }

        /* /////////////////////////////////
        Loading
        ///////////////////////////////// */
        .loader {
          background: #fff;
          display: none;
        }

        .reading.loading .vis,
        .loading .reading .vis {
          background-color: rgba(0, 0, 0, 0.16) !important;
          background-image: none !important;
        }

        .reading.loading .vis .loader,
        .loading .reading .vis .loader {
          display: block;
        }

        .reading.loading .value,
        .loading .reading .value {
          color: rgba(0, 0, 0, 0.16) !important;
        }

        /* /////////////////////////////////
        Room Rating
        ///////////////////////////////// */
        .rating {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding-top: 20px;
        }

        .rating .grade {
          display: block;
          font-size: 80px;
          line-height: 94px;
          font-weight: 700;
          white-spacing: nowrap;
          margin-left: -2px;
          color: #4d9d2e;
        }

        .rating .value {
          display: block;
          font-size: 36px;
          line-height: 42px;
          font-weight: 300;
          letter-spacing: -.02em;
          -webkit-transition: color ease .3s;
          -o-transition: color ease .3s;
          transition: color ease .3s;
          margin-left: -2px;
          color: #4d9d2e;
        }

        .rating .label {
          display: block;
          margin: 8px 0 0;
          font: 700 11px/13px "Roboto", sans-serif;
          color: #333;
          text-transform: uppercase;
          letter-spacing: .1em;
          -webkit-transition: color ease .3s;
          -o-transition: color ease .3s;
          transition: color ease .3s;
        }

        @media (max-width: 699px) {
          .rating {
            padding-top: 12px;
            padding-left: 72px;
          }
          .rating .grade {
            float: left;
            margin-left: -72px;
          }
          .rating .value {
            width: auto;
            margin-top: 16px;
            font-size: 32px;
            line-height: 38px;
          }
          .rating .label {
            margin-top: 4px;
          }
        }

        /* /////////////////////////////////
        Cards & Containers
        ///////////////////////////////// */
        .card {
          position: relative;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          background: #fff;
          border: solid 1px rgba(0, 0, 0, 0.04);
          border-radius: 5px;
          background-clip: padding-box;
          padding: 0 30px 24px 30px;
          margin-bottom: 30px;
        }

        .card > header {
          position: relative;
          margin: 0 -12px 24px;
          padding: 24px 40px 18px 12px;
          border-bottom: solid 1px rgba(0, 0, 0, 0.06);
        }

        .card > header.condensed {
          margin-bottom: 0;
          border-bottom: 0;
        }

        .card > header .legend {
          position: absolute;
          top: 0;
          right: 0;
          padding: 24px 12px 0;
        }

        .card a.head-action {
          position: absolute;
          top: 18px;
          right: 0;
        }

        .card .restrict-width {
          max-width: calc(100% - 220px);
        }

        .card .btn {
          margin: 24px 0 0 0;
        }

        .card .right-action {
          float: right;
          margin-top: -30px;
        }

        .card .right-action .btn {
          margin-top: 0 !important;
        }

        .card > footer {
          max-height: 44px;
          margin: 24px -12px -24px;
          padding: 18px 12px;
          border-top: solid 1px rgba(0, 0, 0, 0.06);
        }

        .card > footer .btn {
          float: left;
          margin-top: 0;
          margin-right: 16px;
        }

        .card > footer .del {
          float: right;
          margin-top: 13px;
        }

        @media (max-width: 1199px) {
          .card {
            margin-bottom: 24px;
          }
        }

        @media (min-width: 700px) and (max-width: 899px) {
          .card .restrict-width {
            max-width: 100%;
          }
          .card .right-action {
            float: none;
            margin-top: 24px;
          }
        }

        @media (max-width: 699px) {
          .card {
            padding: 0 26px 20px 26px;
            margin-bottom: 16px;
          }
          .card > header {
            margin: 0 -12px 20px;
            padding: 20px 36px 14px 12px;
          }
          .card > header .legend {
            position: static;
            padding: 12px 0 0;
          }
          .card a.head-action {
            top: 16px;
            right: 2px;
          }
          .card .restrict-width {
            max-width: 100%;
          }
          .card .btn {
            display: block;
            margin-top: 20px;
          }
          .card .right-action {
            float: none;
            margin-top: 20px;
          }
          .card > footer {
            max-height: none;
            margin: 20px -12px -20px;
            padding: 14px 12px;
          }
          .card > footer .btn {
            display: block;
            float: none;
            width: calc(100% + 16px);
            margin: 12px -8px 0 -8px;
          }
          .card > footer .btn:first-child {
            margin-top: 0;
          }
          .card > footer .del {
            float: none;
            margin-top: 24px;
          }
        }

        .inset {
          margin: 24px 0;
          padding: 24px 30px;
          border: solid 1px rgba(0, 0, 0, 0.06);
          border-radius: 5px;
        }

        .inset.append-top {
          margin-top: 0;
        }

        @media (max-width: 699px) {
          .inset {
            margin: 20px -12px;
            padding: 20px 22px;
          }
        }

        .graph {
          margin: 20px 0 0;
          overflow-x: auto;
        }

        .graph .scroller {
          min-width: 566px;
        }

        .graph .placeholder {
          width: 100%;
          height: 304px;
        }

        /* /////////////////////////////////
        Room Summary
        ///////////////////////////////// */
        .summary-grid .card {
          width: calc((100% - 48px) / 3);
          float: left;
          margin: 0 24px 30px 0;
        }

        .summary-grid .card:nth-child(3n) {
          margin-right: 0;
        }

        .ie .summary-grid .card {
          width: calc((100% - 50px) / 3);
        }

        .summary-grid .card > footer {
          max-height: none;
          margin: 24px -28px -22px;
          padding: 18px 28px;
          border: 0;
          background: rgba(248, 247, 246, 0.8);
          border-radius: 0 0 2px 2px;
          -webkit-transition: background-color ease .3s;
          -o-transition: background-color ease .3s;
          transition: background-color ease .3s;
        }

        .summary-grid .card > footer.grade-high {
          background: rgba(77, 157, 46, 0.08);
        }

        .summary-grid .card > footer.grade-mid {
          background: rgba(224, 181, 10, 0.06);
        }

        .summary-grid .card > footer.grade-low {
          background: rgba(234, 103, 32, 0.05);
        }

        .summary-grid .card > footer p {
          min-height: 44px;
          margin: 0 0 20px 0;
          font-size: 14px;
          line-height: 22px;
          -webkit-transition: opacity ease .3s;
          -o-transition: opacity ease .3s;
          transition: opacity ease .3s;
        }

        .summary-grid .card > footer .btn {
          display: block;
          width: calc(100% + 20px);
          margin: 0 -10px 0;
        }

        .summary-grid .card .readings {
          margin: 24px -30px -4px 0;
        }

        .summary-grid .card .readings .reading {
          width: 50%;
        }

        .summary-grid .card.expired > footer {
          background: rgba(248, 247, 246, 0.8) !important;
        }

        .summary-grid .card.loading > footer {
          background: rgba(248, 247, 246, 0.8) !important;
        }

        .summary-grid .card.loading > footer p {
          opacity: 0;
        }

        @media (min-width: 1200px) and (max-width: 1365px) {
          .summary-grid .card {
            width: calc((100% - 24px) / 2);
          }
          .summary-grid .card:nth-child(3n) {
            margin-right: 24px;
          }
          .summary-grid .card:nth-child(2n) {
            margin-right: 0;
          }
        }

        @media (min-width: 700px) and (max-width: 1023px) {
          .summary-grid .card {
            width: calc((100% - 24px) / 2);
          }
          .summary-grid .card:nth-child(3n) {
            margin-right: 24px;
          }
          .summary-grid .card:nth-child(2n) {
            margin-right: 0;
          }
        }

        @media (max-width: 699px) {
          .summary-grid .card {
            width: 100%;
            margin: 0 0 16px 0;
          }
          .summary-grid .card:nth-child(3n) {
            margin-right: 0;
          }
          .summary-grid .card:nth-child(2n) {
            margin-right: 0;
          }
          .summary-grid .card > footer {
            margin: 20px -24px -18px;
            padding: 16px 24px 16px;
          }
          .summary-grid .card > footer p {
            margin-bottom: 16px;
          }
          .summary-grid .card > footer .btn {
            width: calc(100% + 16px);
            margin: 0 -8px 0;
          }
          .summary-grid .card .readings {
            margin: 20px -26px -4px 0;
          }
        }

        /* /////////////////////////////////
        Room Report / Analysis
        ///////////////////////////////// */
        .card.report {
          position: relative;
        }

        .card.report > header {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 30px;
          right: 30px;
        }

        .card.report .readings {
          position: relative;
          z-index: 0;
          width: 50%;
          padding-right: 30px;
          float: left;
          padding-top: 93px;
        }

        .card.report .readings .reading {
          width: 33.3%;
        }

        .card.report .report-card {
          position: relative;
          z-index: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: calc(50% + 28px);
          padding: 0 30px;
          margin: 2px -28px -22px 0;
          float: right;
          background: rgba(248, 247, 246, 0.8);
          border-radius: 0 2px 2px 0;
          -webkit-transition: background-color ease .3s;
          -o-transition: background-color ease .3s;
          transition: background-color ease .3s;
          padding-top: 93px;
        }

        .card.report .report-card .rating {
          float: left;
          padding-right: 45px;
          width: 33%;
          min-width: 200px;
        }

        .card.report .report-card ul.check {
          float: left;
          width: 66%;
          max-width: calc(100% - 208px);
          margin: 0;
          padding: 34px 0 34px;
        }

        .card.report .report-card.grade-high {
          background: rgba(77, 157, 46, 0.08);
        }

        .card.report .report-card.grade-high .rating .grade,
        .card.report .report-card.grade-high .rating .value {
          color: #4d9d2e;
        }

        .card.report .report-card.grade-high ul.check li.bullet {
          background-image: url("../static/img/bullet-high.svg");
        }

        .card.report .report-card.grade-mid {
          background: rgba(224, 181, 10, 0.06);
        }

        .card.report .report-card.grade-mid .rating .grade,
        .card.report .report-card.grade-mid .rating .value {
          color: #e0b50a;
        }

        .card.report .report-card.grade-mid ul.check li.bullet {
          background-image: url("../static/img/bullet-mid.svg");
        }

        .card.report .report-card.grade-low {
          background: rgba(234, 103, 32, 0.05);
        }

        .card.report .report-card.grade-low .rating .grade,
        .card.report .report-card.grade-low .rating .value {
          color: #ea6720;
        }

        .card.report .report-card.grade-low ul.check li.bullet {
          background-image: url("../static/img/bullet-low.svg");
        }

        .card.report .report-card.expired {
          background: rgba(248, 247, 246, 0.8) !important;
        }

        .card.report .report-card.expired .rating .grade,
        .card.report .report-card.expired .rating .value {
          color: rgba(0, 0, 0, 0.16) !important;
        }

        .card.report .report-card.expired .rating .label {
          color: #777 !important;
        }

        .card.report .report-card.expired ul.check {
          opacity: .33;
        }

        .card.report .report-card.loading {
          background: rgba(248, 247, 246, 0.8) !important;
        }

        .card.report .report-card.loading > * {
          opacity: 0;
        }

        @media (min-width: 1200px) and (max-width: 1365px) {
          .card.report {
            padding-bottom: 2px;
          }
          .card.report header {
            position: relative;
            left: 0;
            right: 0;
          }
          .card.report .readings {
            width: auto;
            float: none;
            padding-top: 0;
          }
          .card.report .report-card {
            width: auto;
            float: none;
            padding-top: 0;
            margin: 24px -28px 0;
            border-radius: 0 0 2px 2px;
          }
        }

        @media (max-width: 1023px) {
          .card.report {
            padding-bottom: 2px;
          }
          .card.report header {
            position: relative;
            left: 0;
            right: 0;
          }
          .card.report .readings {
            width: auto;
            float: none;
            padding-top: 0;
          }
          .card.report .report-card {
            width: auto;
            float: none;
            padding-top: 0;
            margin: 24px -28px 0;
            border-radius: 0 0 2px 2px;
          }
        }

        @media (max-width: 699px) {
          .card.report .readings {
            padding-right: 0;
            margin: 20px -26px -4px 0;
          }
          .card.report .readings .reading {
            width: 50%;
          }
          .card.report .readings .reading:nth-child(3) {
            margin-top: 20px;
          }
          .card.report .readings .reading:nth-child(3) .vis {
            display: none;
          }
          .card.report .report-card {
            margin: 24px -24px 0;
            padding: 0 26px;
          }
          .card.report .report-card .rating {
            width: auto;
            min-width: 0;
            float: none;
            padding-right: 0;
            margin-right: -24px;
          }
          .card.report .report-card ul.check {
            width: auto;
            max-width: 120%;
            float: none;
            padding: 6px 0 24px;
            margin-right: -10px;
          }
        }

        /* /////////////////////////////////
        Alert / Health Warning Card
        ///////////////////////////////// */
        .card.alert {
          border: solid 2px #ea6720;
        }

        .card.alert .img {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 50%;
          background-color: #333;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          border-radius: 0 3px 3px 0;
        }

        .card.alert .img a.head-action {
          right: 18px;
        }

        .card.alert > header {
          padding-left: 54px;
          background: transparent url("../static/img/icon/alert.svg") no-repeat 12px 24px;
        }

        .card.alert > header h2 {
          color: #ea6720;
        }

        .card.alert > footer {
          max-height: none;
          margin: 24px -28px -22px;
          padding: 14px 28px;
          border: 0;
          background: rgba(248, 247, 246, 0.8);
          border-radius: 0 2px 2px 0;
          font-size: 14px;
          color: #777;
        }

        .card.alert > footer p {
          margin: 0;
        }

        .card.alert.with-image {
          padding-right: calc(50% + 28px);
        }

        .card.alert.with-image > header a.head-action {
          display: none;
        }

        .card.alert.health-alert > header {
          background-image: url("../static/img/icon/health.svg");
        }

        @media (min-width: 1200px) and (max-width: 1365px) {
          .card.alert .img {
            width: 36%;
          }
          .card.alert.with-image {
            padding-right: calc(36% + 28px);
          }
        }

        @media (min-width: 700px) and (max-width: 1023px) {
          .card.alert .img {
            width: 36%;
          }
          .card.alert.with-image {
            padding-right: calc(36% + 28px);
          }
        }

        @media (max-width: 699px) {
          .card.alert .img {
            position: relative;
            width: auto;
            height: 200px;
            margin: 0 -26px;
            border-radius: 3px 3px 0 0;
          }
          .card.alert .img a.head-action {
            top: 16px;
            right: 16px;
          }
          .card.alert > header {
            padding-left: 40px;
            background-position: 12px 21px;
            background-size: 20px 20px;
          }
          .card.alert > footer {
            margin: 20px -24px -18px;
            padding: 14px 24px;
          }
          .card.alert.with-image {
            padding-right: 26px;
          }
        }

        /* /////////////////////////////////
        Pre-login cards
        ///////////////////////////////// */
        .card.pre-log .img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 50%;
          background-image: url("../../static/img/logo.svg");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 100%;
          border-radius: 4px 0 0 4px;
        }

        .card.pre-log .text {
          position: relative;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: calc(50% + 30px);
          min-height: 444px;
          float: right;
          margin: 0 -30px -24px;
          padding: 48px 60px;
        }

        .card.pre-log .text > footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0 60px 48px;
        }

        .card.pre-log .text > footer p {
          margin: 0;
          font-size: 14px;
          line-height: 22px;
          color: #777;
        }

        .card.pre-log .text > footer p.left {
          float: left;
        }

        .card.pre-log .text > footer p.right {
          float: right;
        }

        .card.pre-log h2 {
          margin-bottom: 32px;
        }

        .card.pre-log h2.accent {
          margin-top: -16px;
        }

        .card.pre-log .form-row {
          margin-bottom: 0;
        }

        @media (max-width: 1199px) {
          .card.pre-log .img {
            width: 36%;
          }
          .card.pre-log .text {
            width: calc((100% + 60px) * .64);
            padding-left: 48px;
            padding-right: 48px;
          }
          .card.pre-log .text > footer {
            padding-left: 48px;
            padding-right: 48px;
          }
        }

        @media (max-width: 699px) {
          .card.pre-log .img {
            display: none;
          }
          .card.pre-log .text {
            width: auto;
            min-height: 364px;
            float: none;
            margin: 0;
            padding: 25.6px 0;
          }
          .card.pre-log .text > footer {
            padding: 0 0 6.4px;
          }
          .card.pre-log .text > footer p {
            text-align: center;
          }
          .card.pre-log .text > footer p.right, .card.pre-log .text > footer p.left {
            float: none;
          }
          .card.pre-log .text > footer p.right {
            margin-top: 12px;
          }
          .card.pre-log h2 {
            margin-bottom: 0;
            text-align: center;
          }
          .card.pre-log h2.accent {
            margin-top: 16px;
          }
          .card.pre-log .form-row label {
            text-align: center;
          }
          .card.pre-log .form-row input[type=text],
          .card.pre-log .form-row input[type=password],
          .card.pre-log .form-row input[type=search],
          .card.pre-log .form-row input[type=email],
          .card.pre-log .form-row input[type=tel],
          .card.pre-log .form-row input[type=url],
          .card.pre-log .form-row input[type=number],
          .card.pre-log .form-row textarea {
            text-align: center;
          }
          .card.pre-log .form-row .btn {
            text-align: center;
          }
        }

        /* /////////////////////////////////
        Forms
        ///////////////////////////////// */
        input[type=text],
        input[type=password],
        input[type=search],
        input[type=email],
        input[type=tel],
        input[type=url],
        input[type=number],
        textarea {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 44px;
          padding: 8px 18px;
          font: 400 16px/28px "Roboto", sans-serif;
          color: #333;
          background: rgba(248, 247, 246, 0.5);
          border: solid 1px rgba(0, 0, 0, 0.08);
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
          -webkit-appearance: none;
          border-radius: 3px;
        }

        input[type=text]:focus,
        input[type=password]:focus,
        input[type=search]:focus,
        input[type=email]:focus,
        input[type=tel]:focus,
        input[type=url]:focus,
        input[type=number]:focus,
        textarea:focus {
          border: solid 1px rgba(0, 0, 0, 0.16);
        }

        input[type=text]:disabled,
        input[type=password]:disabled,
        input[type=search]:disabled,
        input[type=email]:disabled,
        input[type=tel]:disabled,
        input[type=url]:disabled,
        input[type=number]:disabled,
        textarea:disabled {
          background: #fff;
          color: #777;
        }

        .error input[type=text], .error
        input[type=password], .error
        input[type=search], .error
        input[type=email], .error
        input[type=tel], .error
        input[type=url], .error
        input[type=number], .error
        textarea {
          border-color: #ea6720;
        }

        .max-half input[type=text], .max-half
        input[type=password], .max-half
        input[type=search], .max-half
        input[type=email], .max-half
        input[type=tel], .max-half
        input[type=url], .max-half
        input[type=number], .max-half
        textarea {
          width: calc(50% - 9px);
        }

        @media (max-width: 699px) {
          .max-half input[type=text], .max-half
          input[type=password], .max-half
          input[type=search], .max-half
          input[type=email], .max-half
          input[type=tel], .max-half
          input[type=url], .max-half
          input[type=number], .max-half
          textarea {
            width: 100%;
          }
        }

        textarea {
          height: 100px;
        }

        select {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 44px;
          padding: 8px 18px;
          font: 400 16px/28px "Roboto", sans-serif;
          color: #333;
          background: rgba(248, 247, 246, 0.5);
          border: solid 1px rgba(0, 0, 0, 0.08);
        }

        select:disabled {
          background: #fff;
          color: #777;
        }

        .error select {
          border-color: #ea6720;
        }

        .max-half select {
          width: calc(50% - 9px);
        }

        /* /////////////////////////////////
        iCheck - checkbox and radio button
        ///////////////////////////////// */
        input[type=checkbox],
        input[type=radio] {
          width: 28px;
          height: 28px;
          vertical-align: middle;
          opacity: 0;
        }

        .icheckbox,
        .iradio {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: inline-block;
          vertical-align: middle;
          margin: 0 12px 0 0;
          padding: 0;
          width: 28px;
          height: 28px;
          background: rgba(248, 247, 246, 0.5);
          border: solid 1px rgba(0, 0, 0, 0.08);
          border-radius: 50%;
          cursor: pointer;
          -webkit-transition: background-color ease .2s, border-color ease .2s;
          -o-transition: background-color ease .2s, border-color ease .2s;
          transition: background-color ease .2s, border-color ease .2s;
          position: relative;
          top: -1px;
        }

        .icheckbox {
          background: rgba(248, 247, 246, 0.5) url("../static/img/icon/input-checkbox.svg") no-repeat 6px -48px;
        }

        .icheckbox.hover {
          border: solid 1px rgba(0, 0, 0, 0.16);
          background-position: 6px -20px;
        }

        .icheckbox.checked {
          background-color: #abcc75;
          background-position: 6px 8px;
          border-color: #95B463;
        }

        .icheckbox.disabled {
          background-color: #fff;
        }

        .icheckbox.checked.disabled {
          background-color: rgba(0, 0, 0, 0.16);
          background-position: 6px 8px;
          border: solid 1px rgba(0, 0, 0, 0.06);
        }

        .iradio {
          background: rgba(248, 247, 246, 0.5) url("../static/img/icon/input-radio.svg") no-repeat 9px -47px;
        }

        .iradio.hover {
          border: solid 1px rgba(0, 0, 0, 0.16);
          background-position: 9px -19px;
        }

        .iradio.checked {
          background-color: #abcc75;
          background-position: 9px 9px;
          border-color: #95B463;
        }

        .iradio.disabled {
          background-color: #fff;
        }

        .iradio.checked.disabled {
          background-color: rgba(0, 0, 0, 0.16);
          background-position: 9px 9px;
          border: solid 1px rgba(0, 0, 0, 0.06);
        }

        /* /////////////////////////////////
        Select Box Replace
        ///////////////////////////////// */
        /*
        * jquery.selectBoxIt.css 3.8.1
        * Author: @gregfranko
        * Customised: Benek Lisefski
        */
        /*
        Setup
        */
        /* SelectBoxIt container */
        .selectboxit-container {
          position: relative;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          width: 100%;
          vertical-align: top;
        }

        /* Styles that apply to all SelectBoxIt elements */
        .selectboxit-container * {
          /* Prevents text selection */
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: -moz-none;
          -ms-user-select: none;
          -o-user-select: none;
          user-select: none;
          outline: none;
          white-space: nowrap;
        }

        /* Button */
        .selectboxit-container .selectboxit {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: auto !important;
          /* Width of the dropdown button */
          cursor: pointer;
          margin: 0;
          padding: 0;
          overflow: hidden;
          display: block;
          position: relative;
        }

        /* Focus pseudo selector */
        .selectboxit-container .selectboxit:focus {
          outline: 0;
        }

        /* The first Drop Down option */
        /* The first Drop Down option optgroup */
        /* The last Drop Down option */
        .selectboxit-container .selectboxit-option-icon {
          margin: 0;
          padding: 0;
          vertical-align: middle;
        }

        .selectboxit-rendering {
          display: inline-block !important;
          *display: inline !important;
          zoom: 1 !important;
          visibility: visible !important;
          position: absolute !important;
          top: -9999px !important;
          left: -9999px !important;
        }

        /* jQueryUI and jQuery Mobile compatability fix - Feel free to remove this style if you are not using jQuery Mobile */
        .jqueryui .ui-icon {
          background-color: inherit;
        }

        /* Another jQueryUI and jQuery Mobile compatability fix - Feel free to remove this style if you are not using jQuery Mobile */
        .jqueryui .ui-icon-triangle-1-s {
          background-position: -64px -16px;
        }

        /* /////////////////////////////////
        Default Whare Hauora Theme
        ///////////////////////////////// */
        /* Button */
        .selectboxit-btn {
          font: 400 16px/28px "Roboto", sans-serif;
          color: #333;
          background: rgba(248, 247, 246, 0.5);
          border: solid 1px rgba(0, 0, 0, 0.08);
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
          -webkit-appearance: none;
          border-radius: 3px;
        }

        /* Height and Vertical Alignment of Text */
        .selectboxit-container span, .selectboxit-container .selectboxit-options a {
          height: 44px;
          /* Height of the drop down */
          line-height: 44px;
          /* Vertically positions the drop down text */
          display: block;
        }

        /* Button Text */
        .selectboxit-text {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          max-width: 100% !important;
          padding: 0 40px 0 18px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          float: left;
        }

        .selectboxit-btn.selectboxit-enabled:hover,
        .selectboxit-btn.selectboxit-enabled:focus,
        .selectboxit-btn.selectboxit-enabled:active {
          border: solid 1px rgba(0, 0, 0, 0.16);
        }

        /* Drop Down down arrow container */
        .selectboxit-arrow-container {
          /* Positions the down arrow */
          width: 44px;
          position: absolute;
          top: -2px;
          right: 0;
        }

        /* Drop Down down arrow */
        .selectboxit .selectboxit-arrow-container .selectboxit-arrow {
          /* Horizontally centers the down arrow */
          margin: 0 auto;
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
        }

        .selectboxit-default-arrow {
          width: 0;
          height: 0;
          border-top: 5px solid #333;
          border-right: 4px solid transparent;
          border-left: 4px solid transparent;
        }

        /* Options List */
        .selectboxit-container .selectboxit-options {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          min-width: 100% !important;
          width: 100% !important;
          max-height: 240px;
          margin: -2px 0;
          padding: 12px 2px 12px !important;
          list-style: none;
          position: absolute;
          overflow-x: hidden;
          overflow-y: auto;
          cursor: pointer;
          display: none;
          z-index: 9999999999999;
          text-align: left;
          background-color: #fff;
          border: solid 1px rgba(0, 0, 0, 0.04);
          -webkit-box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          border-radius: 5px;
          background-clip: padding-box;
          overflow: scroll;
        }

        .selectboxit-option {
          list-type: none;
          padding: 0;
          margin: 0 0 2px 0 !important;
          background: none;
        }

        .selectboxit-option:last-child {
          margin-bottom: 0 !important;
        }

        /* Individual options */
        .selectboxit-list .selectboxit-option-anchor {
          display: block;
          height: auto !important;
          padding: 11px 16px 10px 16px !important;
          font-size: 14px;
          line-height: 18px !important;
          color: #777;
          white-space: normal !important;
          border-radius: 3px;
          cursor: pointer;
          -webkit-transition: all ease .2s;
          -o-transition: all ease .2s;
          transition: all ease .2s;
        }

        .no-touch .selectboxit-list .selectboxit-option-anchor:hover {
          background: rgba(248, 247, 246, 0.5);
          color: #333;
        }

        /* Optgroup Header */
        .selectboxit-optgroup-header {
          height: auto !important;
          padding: 16px 16px 12px 12px;
          font: 700 11px/13px "Roboto", sans-serif !important;
          color: #333;
          text-transform: uppercase;
          letter-spacing: .1em;
        }

        .no-touch .selectboxit-optgroup-header:hover {
          cursor: default;
        }

        .selectboxit-btn .selectboxit-option-icon-container {
          float: left;
          height: 44px !important;
          line-height: 44px !important;
        }

        .selectboxit-list .selectboxit-option-icon-container {
          float: left;
          height: 20px !important;
          line-height: 18px !important;
          position: relative;
          top: -1px;
        }

        .selectboxit-option-icon-url {
          width: 20px;
          background-size: 20px 20px;
          background-repeat: no-repeat;
          height: 100%;
          background-position: left center;
          float: left;
          margin: 0 -8px 0 19px !important;
        }

        .selectboxit-list .selectboxit-option-icon-url {
          margin-left: 0 !important;
          margin-right: 8px !important;
        }

        .selectboxit.selectboxit-disabled {
          background: #fff;
          color: #777;
          cursor: default;
        }

        .selectboxit.selectboxit-disabled .selectboxit-default-arrow {
          border-top-color: #777;
        }

        .selectboxit-list > .selectboxit-disabled > .selectboxit-option-anchor {
          color: rgba(0, 0, 0, 0.16);
        }

        .selectboxit-selected > .selectboxit-option-anchor {
          background: #f8f7f6;
          color: #333;
        }

        .no-touch .selectboxit-selected > .selectboxit-option-anchor:hover {
          background: #f8f7f6;
        }

        .error .selectboxit-btn {
          border-color: #ea6720;
        }

        .error .selectboxit-btn.selectboxit-enabled:hover,
        .error .selectboxit-btn.selectboxit-enabled:focus,
        .error .selectboxit-btn.selectboxit-enabled:active {
          border-color: #d7550f;
        }

        /* /////////////////////////////////
        Select box varients
        ///////////////////////////////// */
        .selectboxit-btn.lang-picker {
          background: transparent;
          border: 0;
        }

        .selectboxit-btn.selectboxit-enabled.lang-picker:hover,
        .selectboxit-btn.selectboxit-enabled.lang-picker:focus,
        .selectboxit-btn.selectboxit-enabled.lang-picker:active {
          border: 0;
        }

        .selectboxit-btn.lang-picker .selectboxit-text {
          float: left;
          padding-right: 11px;
          font-size: 14px;
          color: #777;
        }

        .selectboxit-btn.lang-picker .selectboxit-arrow-container {
          width: 5px;
          position: relative;
          float: left;
        }

        .selectboxit-btn.lang-picker .selectboxit-default-arrow {
          border-top-color: #777;
        }

        .selectboxit-btn.whare-picker {
          background: transparent;
          border: 0;
        }

        .selectboxit-btn.selectboxit-enabled.whare-picker:hover,
        .selectboxit-btn.selectboxit-enabled.whare-picker:focus,
        .selectboxit-btn.selectboxit-enabled.whare-picker:active {
          border: 0;
        }

        .selectboxit-btn.whare-picker .selectboxit-text {
          float: left;
          padding-left: 24px;
          padding-right: 9px;
          font-weight: 700;
          max-width: calc(100% - 36px) !important;
        }

        .selectboxit-btn.whare-picker .selectboxit-arrow-container {
          width: 5px;
          position: relative;
          float: left;
        }

        .menu > header .selectboxit-list .selectboxit-option-anchor {
          padding: 11px 22px 10px 22px !important;
        }

        /* /////////////////////////////////
        Nav Links
        ///////////////////////////////// */
        .nav-links {
          list-type: none;
          margin: 0 18px 0 2px;
        }

        .nav-links li {
          list-type: none;
          padding: 0;
          margin: 0;
          background: none;
        }

        .nav-links a {
          display: block;
          padding: 11px 30px 9px 28px;
          border-radius: 0 3px 3px 0;
          font-size: 16px;
          line-height: 20px;
          color: #777;
        }

        .no-touch .nav-links a:hover {
          color: #333;
        }

        .no-touch .nav-links a:active {
          color: #000;
        }

        .nav-links a.current {
          color: #333;
          background: #f8f7f6;
        }

        /* /////////////////////////////////
        Form rows
        ///////////////////////////////// */
        .form-row {
          max-width: 756px;
          margin-top: 24px;
          margin-right: -18px;
          margin-bottom: 30px;
        }

        .inset .form-row {
          margin: 12px 0 0;
        }

        .form-row > li {
          list-type: none;
          padding: 0;
          margin: 0;
          background: none;
          float: left;
          clear: left;
          width: calc(100% - 18px);
          margin-right: 18px;
          margin-bottom: 18px;
        }

        .form-row > li.half {
          width: calc(50% - 18px);
          clear: none;
        }

        .form-row > li.space {
          padding-top: 14px;
        }

        .form-row label {
          display: inline-block;
          margin-right: 6px;
          margin-bottom: 8px;
        }

        .form-row .helper {
          font-size: 11px;
          line-height: 13px;
          color: #777;
        }

        .form-row .btn {
          margin-top: 6px !important;
        }

        .form-row > li.error label {
          color: #ea6720;
        }

        .form-row.inline,
        .inset .form-row.inline {
          max-width: 100%;
          margin: 0;
        }

        .form-row.inline > li,
        .inset .form-row.inline > li {
          clear: none;
          margin-bottom: 0 !important;
        }

        .form-row.inline > li.small,
        .inset .form-row.inline > li.small {
          width: calc(17% - 18px);
          clear: none;
        }

        .form-row.inline > li.small label,
        .inset .form-row.inline > li.small label {
          white-space: nowrap;
        }

        .form-row.inline > li.button,
        .inset .form-row.inline > li.button {
          width: auto;
          clear: none;
          margin-right: 0;
        }

        .form-row.inline > li.button .btn,
        .inset .form-row.inline > li.button .btn {
          margin-top: 27px !important;
        }

        @media (max-width: 699px) {
          .form-row {
            margin-top: 20px;
            margin-right: 0;
            margin-bottom: 24px;
          }
          .form-row > li {
            float: none;
            width: 100%;
            margin-right: 0;
          }
          .form-row > li.half {
            width: 100%;
          }
          .form-row > li.collapse-mob {
            margin-top: -12px;
          }
          .form-row label {
            display: block;
            margin-right: 0;
          }
          .form-row .helper {
            display: block;
            margin-top: -4px;
            margin-bottom: 9px;
          }
          .form-row.inline > li,
          .inset .form-row.inline > li {
            clear: none;
            margin-bottom: 16px !important;
          }
          .form-row.inline > li:last-child,
          .inset .form-row.inline > li:last-child {
            margin-bottom: 0 !important;
          }
          .form-row.inline > li.small,
          .inset .form-row.inline > li.small {
            width: calc(50% - 12px);
            float: left;
            clear: none;
            margin-right: 12px;
          }
          .form-row.inline > li.button,
          .inset .form-row.inline > li.button {
            width: auto;
            clear: none;
            margin-right: 0;
          }
          .form-row.inline > li.button .btn,
          .inset .form-row.inline > li.button .btn {
            margin-top: 27px !important;
          }
        }

        /* /////////////////////////////////
        Form controls
        ///////////////////////////////// */
        .form-controls {
          margin: 6px 0 0;
        }

        .form-controls > li {
          list-type: none;
          padding: 0;
          margin: 0;
          background: none;
          margin-bottom: 6px;
          padding-left: 40px;
        }

        .form-controls > li:last-child {
          margin-bottom: 0;
        }

        .form-controls > li label {
          margin: 0;
          font-size: 14px;
          line-height: 28px;
          font-weight: 400;
          color: #777;
          text-transform: none;
          letter-spacing: 0;
          text-align: left !important;
        }

        .form-controls > li span.sensor {
          height: 24px;
          padding: 0 10px;
          line-height: 24px;
          border-radius: 12px;
          margin-right: 8px;
        }

        .form-controls > li .icheckbox,
        .form-controls > li .iradio {
          float: left;
          margin-left: -40px;
        }

        /* /////////////////////////////////
        Sensor alerts (in alert card)
        ///////////////////////////////// */
        .sensor-alerts {
          margin: -24px -12px -16px;
        }

        .sensor-alerts li {
          list-type: none;
          padding: 0;
          margin: 0;
          background: none;
          padding: 12px 12px;
          border-bottom: solid 1px rgba(0, 0, 0, 0.06);
        }

        .sensor-alerts li:last-child {
          border-bottom: 0;
        }

        .sensor-alerts .sensor {
          float: left;
          margin-right: 12px;
        }

        .sensor-alerts .time {
          float: left;
          line-height: 32px;
        }

        .sensor-alerts .btn {
          float: right;
          margin: 0;
        }

        @media (max-width: 699px) {
          .sensor-alerts {
            margin-top: -20px;
            margin-bottom: -20px;
          }
          .sensor-alerts li {
            padding: 16px 12px 18px;
          }
          .sensor-alerts .sensor {
            float: none;
          }
          .sensor-alerts .time {
            display: block;
            float: none;
            line-height: 22px;
            margin: 8px 0 12px;
          }
          .sensor-alerts .btn {
            display: block;
            float: none;
            width: 100%;
          }
        }

        /* /////////////////////////////////
        Graph Legend
        ///////////////////////////////// */
        .legend {
          margin: 0;
        }

        .legend li {
          list-type: none;
          padding: 0;
          margin: 0;
          background: none;
          display: inline-block;
          margin-left: 24px;
          font-size: 12px;
          line-height: 18px;
        }

        .legend .temp,
        .legend .hum {
          display: inline-block;
          vertical-align: middle;
          width: 8px;
          height: 8px;
          margin-right: 8px;
          position: relative;
          top: -1px;
        }

        .legend .temp {
          background: #4d9d2e;
          border-radius: 2px;
        }

        .legend .hum {
          background: rgba(77, 157, 46, 0.33);
          border-radius: 50%;
        }

        @media (max-width: 699px) {
          .legend li {
            margin-left: 0;
            margin-right: 24px;
          }
        }

        /* /////////////////////////////////
        Table Lists
        ///////////////////////////////// */
        table {
          width: 100%;
          border-collapse: separate;
          margin: 0;
          line-height: 22px;
        }

        tr th {
          padding: 4px 0 12px 30px;
          font: 700 11px/13px "Roboto", sans-serif;
          color: #333;
          text-transform: uppercase;
          letter-spacing: .1em;
          vertical-align: bottom;
          text-align: left;
        }

        tr th:last-child {
          padding-right: 30px;
        }

        tr:not(.spacer) td {
          padding: 14px 0 14px 30px;
          background: rgba(248, 247, 246, 0.5);
          border-top: solid 1px rgba(0, 0, 0, 0.06);
          border-bottom: solid 1px rgba(0, 0, 0, 0.06);
          vertical-align: middle;
          text-align: left;
        }

        tr:not(.spacer) td:first-child {
          border-left: solid 1px rgba(0, 0, 0, 0.06);
          border-radius: 6px 0 0 6px;
        }

        tr:not(.spacer) td:last-child {
          padding-right: 30px;
          border-right: solid 1px rgba(0, 0, 0, 0.06);
          border-radius: 0 6px 6px 0;
        }

        tr:not(.spacer) td.actions {
          min-width: 96px;
          padding-left: 0;
          text-align: right;
        }

        tr:not(.spacer) td.unbreak {
          overflow: hidden;
          white-space: nowrap;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
        }

        tr:not(.spacer) td .sub {
          display: block;
          font-size: 14px;
          color: #777;
        }

        tr:not(.spacer) td .sensor {
          display: inline-block;
          vertical-align: middle;
          margin: -4px 0;
        }

        tr:not(.spacer) td dl {
          display: inline-block;
          vertical-align: middle;
          margin: 0;
        }

        tr:not(.spacer) td .sensor-group .sensor {
          margin-right: 12px;
        }

        tr:not(.spacer) td .sensor-group dl {
          margin-top: 2px;
        }

        tr:not(.spacer) td a.btn {
          margin: 0 !important;
          vertical-align: middle;
          text-align: left !important;
        }

        tr:not(.spacer) td a.table-action {
          display: inline-block;
          vertical-align: middle;
          margin-left: 26px;
        }

        tr:not(.spacer) td a:not(.btn):not(.table-action) {
          position: relative;
          display: inline-block;
          font-weight: 700;
          text-decoration: underline;
        }

        tr.spacer td {
          height: 6px;
        }

        @media (max-width: 699px) {
          table {
            width: calc(100% + 24px);
            margin: 0 -12px;
            font-size: 12px;
            line-height: 18px;
          }
          tr th {
            padding: 4px 0 12px 18px;
          }
          tr th:last-child {
            padding-right: 18px;
          }
          tr:not(.spacer) td {
            padding: 12px 0 12px 18px;
          }
          tr:not(.spacer) td:last-child {
            padding-right: 18px;
          }
          tr:not(.spacer) td.actions {
            min-width: 0;
          }
          tr:not(.spacer) td.unbreak {
            max-width: 160px;
          }
          tr:not(.spacer) td a.table-action {
            margin-left: 0;
          }
          table.mob-break tr:not(.spacer) td {
            display: block;
            border-top: 0;
            border-bottom: 0;
            border-left: solid 1px rgba(0, 0, 0, 0.06);
            border-right: solid 1px rgba(0, 0, 0, 0.06);
            padding: 8px 18px;
          }
          table.mob-break tr:not(.spacer) td:first-child {
            border-top: solid 1px rgba(0, 0, 0, 0.06);
            border-radius: 6px 6px 0 0;
            padding: 16px 18px 8px;
          }
          table.mob-break tr:not(.spacer) td:last-child {
            border-bottom: solid 1px rgba(0, 0, 0, 0.06);
            border-radius: 0 0 6px 6px;
            padding: 8px 18px 16px;
          }
          table.mob-break tr:not(.spacer) td.actions {
            padding: 12px 0 0 0 !important;
          }
          table.mob-break tr:not(.spacer) td.actions .btn {
            border-radius: 0 0 5px 5px;
          }
        }

        /* This is the core CSS of Tooltipster */
        /* GENERAL STRUCTURE RULES (do not edit this section) */
        .tooltipster-base {
          /* this ensures that a constrained height set by functionPosition,
          if greater that the natural height of the tooltip, will be enforced
          in browsers that support display:flex */
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          pointer-events: none;
          /* this may be overriden in JS for fixed position origins */
          position: absolute;
        }

        .tooltipster-box {
          /* see .tooltipster-base. flex-shrink 1 is only necessary for IE10-
          and flex-basis auto for IE11- (at least) */
          -webkit-box-flex: 1;
          -ms-flex: 1 1 auto;
          flex: 1 1 auto;
        }

        .tooltipster-content {
          /* prevents an overflow if the user adds padding to the div */
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          /* these make sure we'll be able to detect any overflow */
          max-height: 100%;
          max-width: 100%;
          overflow: auto;
        }

        .tooltipster-ruler {
          /* these let us test the size of the tooltip without overflowing the window */
          bottom: 0;
          left: 0;
          overflow: hidden;
          position: fixed;
          right: 0;
          top: 0;
          visibility: hidden;
        }

        /* ANIMATIONS */
        /* Open/close animations */
        /* fade */
        .tooltipster-fade {
          opacity: 0;
          -webkit-transition-property: opacity;
          -moz-transition-property: opacity;
          -o-transition-property: opacity;
          -ms-transition-property: opacity;
          transition-property: opacity;
        }

        .tooltipster-fade.tooltipster-show {
          opacity: 1;
        }

        /* grow */
        .tooltipster-grow {
          -webkit-transform: scale(0, 0);
          -moz-transform: scale(0, 0);
          -o-transform: scale(0, 0);
          -ms-transform: scale(0, 0);
          transform: scale(0, 0);
          -webkit-transition-property: -webkit-transform;
          -moz-transition-property: -moz-transform;
          -o-transition-property: -o-transform;
          -ms-transition-property: -ms-transform;
          transition-property: -webkit-transform;
          -o-transition-property: transform;
          transition-property: transform;
          transition-property: transform, -webkit-transform;
          -webkit-backface-visibility: hidden;
        }

        .tooltipster-grow.tooltipster-show {
          -webkit-transform: scale(1, 1);
          -moz-transform: scale(1, 1);
          -o-transform: scale(1, 1);
          -ms-transform: scale(1, 1);
          transform: scale(1, 1);
          -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          -moz-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          -ms-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          -o-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
        }

        /* swing */
        .tooltipster-swing {
          opacity: 0;
          -webkit-transform: rotateZ(4deg);
          -moz-transform: rotateZ(4deg);
          -o-transform: rotateZ(4deg);
          -ms-transform: rotateZ(4deg);
          transform: rotateZ(4deg);
          -webkit-transition-property: -webkit-transform, opacity;
          -moz-transition-property: -moz-transform;
          -o-transition-property: -o-transform;
          -ms-transition-property: -ms-transform;
          -webkit-transition-property: -webkit-transform;
          transition-property: -webkit-transform;
          -o-transition-property: transform;
          transition-property: transform;
          transition-property: transform, -webkit-transform;
        }

        .tooltipster-swing.tooltipster-show {
          opacity: 1;
          -webkit-transform: rotateZ(0deg);
          -moz-transform: rotateZ(0deg);
          -o-transform: rotateZ(0deg);
          -ms-transform: rotateZ(0deg);
          transform: rotateZ(0deg);
          -webkit-transition-timing-function: cubic-bezier(0.23, 0.635, 0.495, 1);
          -webkit-transition-timing-function: cubic-bezier(0.23, 0.635, 0.495, 2.4);
          -moz-transition-timing-function: cubic-bezier(0.23, 0.635, 0.495, 2.4);
          -ms-transition-timing-function: cubic-bezier(0.23, 0.635, 0.495, 2.4);
          -o-transition-timing-function: cubic-bezier(0.23, 0.635, 0.495, 2.4);
          transition-timing-function: cubic-bezier(0.23, 0.635, 0.495, 2.4);
        }

        /* fall */
        .tooltipster-fall {
          -webkit-transition-property: top;
          -moz-transition-property: top;
          -o-transition-property: top;
          -ms-transition-property: top;
          transition-property: top;
          -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          -moz-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          -ms-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          -o-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
        }

        .tooltipster-fall.tooltipster-initial {
          top: 0 !important;
        }

        .tooltipster-fall.tooltipster-dying {
          -webkit-transition-property: all;
          -moz-transition-property: all;
          -o-transition-property: all;
          -ms-transition-property: all;
          transition-property: all;
          top: 0 !important;
          opacity: 0;
        }

        /* slide */
        .tooltipster-slide {
          -webkit-transition-property: left;
          -moz-transition-property: left;
          -o-transition-property: left;
          -ms-transition-property: left;
          transition-property: left;
          -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          -moz-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          -ms-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          -o-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.15);
        }

        .tooltipster-slide.tooltipster-initial {
          left: -40px !important;
        }

        .tooltipster-slide.tooltipster-dying {
          -webkit-transition-property: all;
          -moz-transition-property: all;
          -o-transition-property: all;
          -ms-transition-property: all;
          transition-property: all;
          left: 0 !important;
          opacity: 0;
        }

        /* Update animations */
        /* We use animations rather than transitions here because
        transition durations may be specified in the style tag due to
        animationDuration, and we try to avoid collisions and the use
        of !important */
        /* fade */
        @-webkit-keyframes tooltipster-fading {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes tooltipster-fading {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .tooltipster-update-fade {
          -webkit-animation: tooltipster-fading 400ms;
          animation: tooltipster-fading 400ms;
        }

        /* rotate */
        @-webkit-keyframes tooltipster-rotating {
          25% {
            -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
          }
          75% {
            -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
          }
          100% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
        }
        @keyframes tooltipster-rotating {
          25% {
            -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
          }
          75% {
            -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
          }
          100% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
        }

        .tooltipster-update-rotate {
          -webkit-animation: tooltipster-rotating 600ms;
          animation: tooltipster-rotating 600ms;
        }

        /* scale */
        @-webkit-keyframes tooltipster-scaling {
          50% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }
        @keyframes tooltipster-scaling {
          50% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }

        .tooltipster-update-scale {
          -webkit-animation: tooltipster-scaling 600ms;
          animation: tooltipster-scaling 600ms;
        }

        /**
        * DEFAULT STYLE OF THE SIDETIP PLUGIN
        *
        * All styles are "namespaced" with .tooltipster-sidetip to prevent
        * conflicts between plugins.
        */
        /* .tooltipster-box */
        .tooltipster-sidetip .tooltipster-box {
          background: #fff;
          border: solid 1px rgba(0, 0, 0, 0.04);
          border-radius: 6px;
          -webkit-box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          border-radius: 5px;
          background-clip: padding-box;
        }

        .tooltipster-sidetip.tooltipster-bottom .tooltipster-box {
          margin-top: 6px;
        }

        .tooltipster-sidetip.tooltipster-left .tooltipster-box {
          margin-right: 6px;
        }

        .tooltipster-sidetip.tooltipster-right .tooltipster-box {
          margin-left: 6px;
        }

        .tooltipster-sidetip.tooltipster-top .tooltipster-box {
          margin-bottom: 6px;
        }

        /* .tooltipster-content */
        .tooltipster-sidetip .tooltipster-content {
          color: #777;
          font-size: 12px;
          line-height: 18px;
          padding: 14px 20px;
        }

        .tooltipster-sidetip .tooltipster-content h6 {
          margin: 3px 0 0;
        }

        .tooltipster-sidetip .tooltipster-content p {
          margin: 8px 0 0 0;
        }

        .tooltipster-sidetip .tooltipster-content p:first-child {
          margin-top: 0;
        }

        .tooltipster-sidetip .tooltipster-content .reading .value {
          font-size: 36px;
          line-height: 42px;
          font-weight: bold;
          letter-spacing: -.05em;
          -webkit-transition: color ease .3s;
          -o-transition: color ease .3s;
          transition: color ease .3s;
          margin-left: -1px;
        }

        @media (max-width: 699px) {
          .tooltipster-sidetip .tooltipster-content .reading .value {
            font-size: 32px;
            line-height: 38px;
          }
        }

        .tooltipster-sidetip .tooltipster-content .reading .label {
          display: block;
          margin: 8px 0 0;
          font: 700 11px/13px "Roboto", sans-serif;
          color: #333;
          text-transform: uppercase;
          letter-spacing: .1em;
          -webkit-transition: color ease .3s;
          -o-transition: color ease .3s;
          transition: color ease .3s;
        }

        @media (max-width: 699px) {
          .tooltipster-sidetip .tooltipster-content .reading .label {
            margin-top: 4px;
          }
        }

        .tooltipster-sidetip .tooltipster-content .reading .time {
          display: block;
          margin-top: 2px;
          font-size: 12px;
          line-height: 18px;
          color: #777;
        }

        /* .tooltipster-arrow : will keep only the zone of .tooltipster-arrow-uncropped that
        corresponds to the arrow we want to display */
        .tooltipster-sidetip .tooltipster-arrow {
          overflow: hidden;
          position: absolute;
        }

        .tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow {
          height: 6px;
          /* half the width, for centering */
          margin-left: -6px;
          top: 1px;
          width: 12px;
        }

        .tooltipster-sidetip.tooltipster-left .tooltipster-arrow {
          height: 12px;
          margin-top: -6px;
          right: 0;
          /* top 0 to keep the arrow from overflowing .tooltipster-base when it has not
          been positioned yet */
          top: 0;
          width: 6px;
        }

        .tooltipster-sidetip.tooltipster-right .tooltipster-arrow {
          height: 12px;
          margin-top: -6px;
          left: 0;
          /* same as .tooltipster-left .tooltipster-arrow */
          top: 0;
          width: 6px;
        }

        .tooltipster-sidetip.tooltipster-top .tooltipster-arrow {
          bottom: 1px;
          height: 6px;
          margin-left: -6px;
          width: 12px;
        }

        /* common rules between .tooltipster-arrow-background and .tooltipster-arrow-border */
        .tooltipster-sidetip .tooltipster-arrow-background, .tooltipster-sidetip .tooltipster-arrow-border {
          height: 0;
          position: absolute;
          width: 0;
        }

        /* .tooltipster-arrow-background */
        .tooltipster-sidetip .tooltipster-arrow-background {
          border: 6px solid transparent;
        }

        .tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow-background {
          border-bottom-color: #fff;
          left: 0;
          top: 0;
        }

        .tooltipster-sidetip.tooltipster-left .tooltipster-arrow-background {
          border-left-color: #fff;
          left: 0;
          top: 0;
        }

        .tooltipster-sidetip.tooltipster-right .tooltipster-arrow-background {
          border-right-color: #fff;
          left: 0;
          top: 0;
        }

        .tooltipster-sidetip.tooltipster-top .tooltipster-arrow-background {
          border-top-color: #fff;
          left: 0;
          top: 0;
        }

        /* .tooltipster-arrow-border */
        .tooltipster-sidetip .tooltipster-arrow-border {
          border: 6px solid transparent;
          left: 0;
          top: 0;
        }

        .tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow-border {
          border-bottom-color: rgba(0, 0, 0, 0.433);
        }

        .tooltipster-sidetip.tooltipster-left .tooltipster-arrow-border {
          border-left-color: rgba(0, 0, 0, 0.33);
        }

        .tooltipster-sidetip.tooltipster-right .tooltipster-arrow-border {
          border-right-color: rgba(0, 0, 0, 0.33);
        }

        .tooltipster-sidetip.tooltipster-top .tooltipster-arrow-border {
          border-top-color: rgba(0, 0, 0, 0.33);
        }

        /* tooltipster-arrow-uncropped */
        .tooltipster-sidetip .tooltipster-arrow-uncropped {
          position: relative;
        }

        .tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow-uncropped {
          top: -6px;
        }

        .tooltipster-sidetip.tooltipster-right .tooltipster-arrow-uncropped {
          left: -6px;
        }

        /* /////////////////////////////////
        Modal Boxes & content
        ///////////////////////////////// */
        .modal {
          position: relative;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          max-width: 696px;
          background: #fff;
          border: solid 1px rgba(0, 0, 0, 0.04);
          border-radius: 5px;
          -webkit-box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          background-clip: padding-box;
          padding: 0 30px 24px 30px;
          margin: 30px auto;
        }

        .modal > header {
          position: relative;
          margin: 0 -12px 24px;
          padding: 24px 40px 18px 12px;
          border-bottom: solid 1px rgba(0, 0, 0, 0.06);
        }

        .modal a.head-action {
          position: absolute;
          top: 18px;
          right: 0;
        }

        .modal a.head-action svg path {
          fill: #333;
        }

        .modal .btn {
          margin: 24px 0 0 0;
        }

        .modal > footer {
          max-height: 44px;
          margin: 24px -12px -24px;
          padding: 18px 12px;
          border-top: solid 1px rgba(0, 0, 0, 0.06);
        }

        .modal > footer .btn {
          float: left;
          margin-top: 0;
          margin-right: 16px;
        }

        .modal > footer .del,
        .modal > footer .cancel {
          float: right;
          margin-top: 13px;
        }

        @media (max-width: 1199px) {
          .modal {
            margin: 24px auto;
          }
        }

        @media (max-width: 699px) {
          .modal {
            padding: 0 26px 20px 26px;
            margin: 15px auto;
          }
          .modal > header {
            margin: 0 -12px 20px;
            padding: 20px 36px 14px 12px;
          }
          .modal a.head-action {
            top: 16px;
            right: 2px;
          }
          .modal .btn {
            display: block;
            margin-top: 20px;
          }
          .modal > footer {
            max-height: none;
            margin: 20px -12px -20px;
            padding: 14px 12px;
          }
          .modal > footer .btn {
            display: block;
            float: none;
            width: calc(100% + 16px);
            margin: 12px -8px 0 -8px;
          }
          .modal > footer .btn:first-child {
            margin-top: 0;
          }
          .modal > footer .del,
          .modal > footer .cancel {
            float: none;
            margin-top: 24px;
          }
        }

        /* /////////////////////////////////
        Alert Modal
        ///////////////////////////////// */
        .modal.alert > header {
          padding-left: 54px;
          background: transparent url("../static/img/icon/alert.svg") no-repeat 12px 24px;
        }

        .modal.alert > header h2 {
          color: #ea6720;
        }

        @media (max-width: 699px) {
          .modal.alert > header {
            padding-left: 50px;
            background-position: 12px 20px;
          }
        }

        /* /////////////////////////////////
        Modal box animations
        ///////////////////////////////// */
        /* modal, start state */
        .modal {
          opacity: 0;
          -webkit-transition: all .2s ease-out;
          -moz-transition: all .2s ease-out;
          -o-transition: all .2s ease-out;
          transition: all .2s ease-out;
          -webkit-transform: translateY(-12px) perspective(696px) rotateX(5deg);
          -moz-transform: translateY(-12px) perspective(696px) rotateX(5deg);
          -ms-transform: translateY(-12px) perspective(696px) rotateX(5deg);
          -o-transform: translateY(-12px) perspective(696px) rotateX(5deg);
          transform: translateY(-12px) perspective(696px) rotateX(5deg);
        }

        /* animate in */
        .mfp-ready .modal {
          opacity: 1;
          -webkit-transform: translateY(0) perspective(696px) rotateX(0);
          -moz-transform: translateY(0) perspective(696px) rotateX(0);
          -ms-transform: translateY(0) perspective(696px) rotateX(0);
          -o-transform: translateY(0) perspective(696px) rotateX(0);
          transform: translateY(0) perspective(696px) rotateX(0);
        }

        /* animate out */
        .mfp-removing .modal {
          opacity: 0;
          -webkit-transform: translateY(-12px) perspective(696px) rotateX(5deg);
          -moz-transform: translateY(-12px) perspective(696px) rotateX(5deg);
          -ms-transform: translateY(-12px) perspective(696px) rotateX(5deg);
          -o-transform: translateY(-12px) perspective(696px) rotateX(5deg);
          transform: translateY(-12px) perspective(696px) rotateX(5deg);
        }

        /* Dark overlay, start state */
        .mfp-bg {
          opacity: 0;
          -webkit-transition: opacity .2s ease-out;
          -moz-transition: opacity .2s ease-out;
          -o-transition: opacity .2s ease-out;
          transition: opacity .2s ease-out;
        }

        /* animate in */
        .mfp-ready.mfp-bg {
          opacity: 1;
        }

        /* animate out */
        .mfp-removing.mfp-bg {
          opacity: 0;
        }

        /* /////////////////////////////////
        Magnific Popup settings / vars
        ///////////////////////////////// */
        .mfp-bg {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1042;
          overflow: hidden;
          position: fixed;
          background: rgba(248, 247, 246, 0.8);
        }

        .mfp-wrap {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1043;
          position: fixed;
          outline: none !important;
          -webkit-backface-visibility: hidden;
        }

        .mfp-container {
          text-align: center;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          padding: 0 36px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        .mfp-container:before {
          content: '';
          display: inline-block;
          height: 100%;
          vertical-align: middle;
        }

        .mfp-align-top .mfp-container:before {
          display: none;
        }

        .mfp-content {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          margin: 0 auto;
          text-align: left;
          z-index: 1045;
        }

        .mfp-inline-holder .mfp-content,
        .mfp-ajax-holder .mfp-content {
          width: 100%;
          cursor: auto;
        }

        .mfp-ajax-cur {
          cursor: progress;
        }

        .mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close {
          cursor: -moz-zoom-out;
          cursor: -webkit-zoom-out;
          cursor: zoom-out;
        }

        .mfp-zoom {
          cursor: pointer;
          cursor: -webkit-zoom-in;
          cursor: -moz-zoom-in;
          cursor: zoom-in;
        }

        .mfp-auto-cursor .mfp-content {
          cursor: auto;
        }

        .mfp-close,
        .mfp-arrow,
        .mfp-preloader,
        .mfp-counter {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .mfp-loading.mfp-figure {
          display: none;
        }

        .mfp-hide {
          display: none !important;
        }

        .mfp-preloader {
          color: #CCC;
          position: absolute;
          top: 50%;
          width: auto;
          text-align: center;
          margin-top: -0.8em;
          left: 8px;
          right: 8px;
          z-index: 1044;
        }

        .mfp-preloader a {
          color: #CCC;
        }

        .mfp-preloader a:hover {
          color: #FFF;
        }

        .mfp-s-ready .mfp-preloader {
          display: none;
        }

        .mfp-s-error .mfp-content {
          display: none;
        }

        button.mfp-close, button.mfp-arrow {
          overflow: visible;
          cursor: pointer;
          background: transparent;
          border: 0;
          -webkit-appearance: none;
          display: block;
          outline: none;
          padding: 0;
          z-index: 1046;
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        button::-moz-focus-inner {
          padding: 0;
          border: 0;
        }

        .mfp-close {
          width: 44px;
          height: 44px;
          line-height: 44px;
          position: absolute;
          right: 0;
          top: 0;
          text-decoration: none;
          text-align: center;
          opacity: 0.65;
          padding: 0 0 18px 10px;
          color: #FFF;
          font-style: normal;
          font-size: 28px;
          font-family: Arial, Baskerville, monospace;
        }

        .mfp-close:hover, .mfp-close:focus {
          opacity: 1;
        }

        .mfp-close:active {
          top: 1px;
        }

        .mfp-close-btn-in .mfp-close {
          color: #333;
        }

        .mfp-image-holder .mfp-close,
        .mfp-iframe-holder .mfp-close {
          color: #FFF;
          right: -6px;
          text-align: right;
          padding-right: 6px;
          width: 100%;
        }

        .mfp-counter {
          position: absolute;
          top: 0;
          right: 0;
          color: #CCC;
          font-size: 12px;
          line-height: 18px;
        }

        .mfp-arrow {
          position: absolute;
          opacity: 0.65;
          margin: 0;
          top: 50%;
          margin-top: -55px;
          padding: 0;
          width: 90px;
          height: 110px;
          -webkit-tap-highlight-color: transparent;
        }

        .mfp-arrow:active {
          margin-top: -54px;
        }

        .mfp-arrow:hover, .mfp-arrow:focus {
          opacity: 1;
        }

        .mfp-arrow:before, .mfp-arrow:after,
        .mfp-arrow .mfp-b,
        .mfp-arrow .mfp-a {
          content: '';
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          top: 0;
          margin-top: 35px;
          margin-left: 35px;
          border: medium inset transparent;
        }

        .mfp-arrow:after,
        .mfp-arrow .mfp-a {
          border-top-width: 13px;
          border-bottom-width: 13px;
          top: 8px;
        }

        .mfp-arrow:before,
        .mfp-arrow .mfp-b {
          border-top-width: 21px;
          border-bottom-width: 21px;
        }

        .mfp-arrow-left {
          left: 0;
        }

        .mfp-arrow-left:after,
        .mfp-arrow-left .mfp-a {
          border-right: 17px solid #FFF;
          margin-left: 31px;
        }

        .mfp-arrow-left:before,
        .mfp-arrow-left .mfp-b {
          margin-left: 25px;
          border-right: 27px solid #3f3f3f;
        }

        .mfp-arrow-right {
          right: 0;
        }

        .mfp-arrow-right:after,
        .mfp-arrow-right .mfp-a {
          border-left: 17px solid #FFF;
          margin-left: 39px;
        }

        .mfp-arrow-right:before,
        .mfp-arrow-right .mfp-b {
          border-left: 27px solid #3f3f3f;
        }

        .mfp-iframe-holder {
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .mfp-iframe-holder .mfp-content {
          line-height: 0;
          width: 100%;
          max-width: 900px;
        }

        .mfp-iframe-holder .mfp-close {
          top: -40px;
        }

        .mfp-iframe-scaler {
          width: 100%;
          height: 0;
          overflow: hidden;
          padding-top: 56.25%;
        }

        .mfp-iframe-scaler iframe {
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
          background: #000;
        }

        /* Main image in popup */
        img.mfp-img {
          width: auto;
          max-width: 100%;
          height: auto;
          display: block;
          line-height: 0;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 40px 0 40px;
          margin: 0 auto;
        }

        /* The shadow behind the image */
        .mfp-figure {
          line-height: 0;
        }

        .mfp-figure:after {
          content: '';
          position: absolute;
          left: 0;
          top: 40px;
          bottom: 40px;
          display: block;
          right: 0;
          width: auto;
          height: auto;
          z-index: -1;
          -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
          background: #444;
        }

        .mfp-figure small {
          color: #BDBDBD;
          display: block;
          font-size: 12px;
          line-height: 14px;
        }

        .mfp-bottom-bar {
          margin-top: -36px;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          cursor: auto;
        }

        .mfp-title {
          text-align: left;
          line-height: 18px;
          color: #F3F3F3;
          word-wrap: break-word;
          padding-right: 36px;
        }

        .mfp-image-holder .mfp-content {
          max-width: 100%;
        }

        .mfp-gallery .mfp-image-holder .mfp-figure {
          cursor: pointer;
        }

        @media screen and (max-width: 800px) and (orientation: landscape), screen and (max-height: 300px) {
          /**
          * Remove all paddings around the image on small screen
          */
          .mfp-img-mobile .mfp-image-holder {
            padding-left: 0;
            padding-right: 0;
          }
          .mfp-img-mobile img.mfp-img {
            padding: 0;
          }
          .mfp-img-mobile .mfp-figure {
            /* The shadow behind the image */
          }
          .mfp-img-mobile .mfp-figure:after {
            top: 0;
            bottom: 0;
          }
          .mfp-img-mobile .mfp-figure small {
            display: inline;
            margin-left: 5px;
          }
          .mfp-img-mobile .mfp-bottom-bar {
            background: rgba(0, 0, 0, 0.6);
            bottom: 0;
            margin: 0;
            top: auto;
            padding: 3px 5px;
            position: fixed;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          .mfp-img-mobile .mfp-bottom-bar:empty {
            padding: 0;
          }
          .mfp-img-mobile .mfp-counter {
            right: 5px;
            top: 3px;
          }
          .mfp-img-mobile .mfp-close {
            top: 0;
            right: 0;
            width: 35px;
            height: 35px;
            line-height: 35px;
            background: rgba(0, 0, 0, 0.6);
            position: fixed;
            text-align: center;
            padding: 0;
          }
        }

        @media all and (max-width: 900px) {
          .mfp-arrow {
            -webkit-transform: scale(0.75);
            -ms-transform: scale(0.75);
            transform: scale(0.75);
          }
          .mfp-arrow-left {
            -webkit-transform-origin: 0;
            -ms-transform-origin: 0;
            transform-origin: 0;
          }
          .mfp-arrow-right {
            -webkit-transform-origin: 100%;
            -ms-transform-origin: 100%;
            transform-origin: 100%;
          }
          .mfp-container {
            padding-left: 14px;
            padding-right: 14px;
          }
        }

        .mfp-ie7 .mfp-img {
          padding: 0;
        }

        .mfp-ie7 .mfp-bottom-bar {
          width: 600px;
          left: 50%;
          margin-left: -300px;
          margin-top: 5px;
          padding-bottom: 5px;
        }

        .mfp-ie7 .mfp-container {
          padding: 0;
        }

        .mfp-ie7 .mfp-content {
          padding-top: 44px;
        }

        .mfp-ie7 .mfp-close {
          top: 0;
          right: 0;
          padding-top: 0;
        }

        /* /////////////////////////////////
        Pattern Library
        ///////////////////////////////// */
        h1.inline {
          margin-top: 48px;
        }

        @media (max-width: 1199px) {
          h1.inline {
            margin-top: 38px;
          }
        }

        @media (max-width: 699px) {
          h1.inline {
            margin-top: 16px;
          }
        }

        .note {
          margin: 0 0 30px 0;
          padding: 0 30px 24px;
          background: rgba(255, 255, 255, 0.5);
          border: solid 1px rgba(0, 0, 0, 0.06);
          border-radius: 5px;
        }

        .note h3 {
          margin: 24px 0;
        }

        @media (max-width: 699px) {
          .note {
            margin-bottom: 16px;
            padding: 20px 22px;
          }
        }

        .card .note {
          margin: 30px 0 0 0;
          background: rgba(248, 247, 246, 0.5);
        }

        @media (max-width: 699px) {
          .card .note {
            margin: 20px -12px 0;
          }
        }

        code {
          display: inline-block;
          padding: 0 6px;
          background: #fff;
          border: solid 1px rgba(0, 0, 0, 0.06);
          border-radius: 3px;
        }

        xmp {
          padding: 6px 12px;
          background: #fff;
          border: solid 1px rgba(0, 0, 0, 0.06);
          border-radius: 3px;
          font-size: 14px;
          line-height: 22px;
          white-space: pre-wrap;
        }

        div.demo h1,
        div.demo h2,
        div.demo h3,
        div.demo h4,
        div.demo h5,
        div.demo h6 {
          margin-top: 24px !important;
          margin-bottom: 0 !important;
          padding-left: 0 !important;
        }

        div.demo h1.lg,
        div.demo h4.lg {
          text-align: left;
        }

        .readings.demo .reading {
          margin-right: 20px;
        }
    )
`;
