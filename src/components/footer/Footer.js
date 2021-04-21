import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer class="page-footer grey darken-4">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">zimcoolestkids</h5>
                            <p class="grey-text text-lighten-4">So out of the world and in your mind. Giving you the best of us!</p>
                        </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">contact</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">email: adriankokai@gmail.com</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Instagram: @_zimcoolestkids</a></li>
                            <li>
                                <a 
                                    class="grey-text text-lighten-3" 
                                    href="https://www.youtube.com/channel/UCXBVSgPoNmsFopnNyEWFG3w"
                                >
                                    YouTube: zimcoolestkids
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2021 blu market
                        <a class="grey-text text-lighten-4 right" href="#!">zimcoolestkids</a>
                    </div>
                </div>
          </footer>
        )
    }
}

export default Footer
