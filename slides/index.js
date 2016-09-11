import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "src";

import preloader from "src/utils/preloader";

const slideTransition = ['slide'];
const images = {
  javascript: require("assets/javascript.jpg"),
  javascript2: require("assets/javascript2.jpg"),
  logo: require("assets/logo.png"),
  kanban: require("assets/kanban.gif"),
  moduleCounts: require("assets/module_counts.png"),
  redmonk: require("assets/redmonk.png"),
  jobs: require("assets/jobs.png"),
  jobTitles: require("assets/jobTitles.png"),
  jackie: require("assets/jackie.png"),
  indieBundle: require("assets/indiebundle.png"),
  markdown: require("assets/markdown.png"),
  github: require("assets/github.png"),
  covers: require("assets/covers.jpg"),
  openClosed: require("assets/open_closed.jpg")
};

preloader([images.moduleCounts, images.redmonk, images.jobs]);

export default class Slides extends React.Component {
  render() {
    return (
      <Spectacle>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              How to write a book and
            </Heading>
            <Heading size={1} fit>
              SurviveJS it
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              JavaScript Usage on Sites
            </Heading>
            <Markdown>
          {`
* 2011 - 38.2%
* 2013 - 60.4%
* 2015 - 70.5%
* 2016 - 73.5%
* Source: [W3Techs](http://w3techs.com/technologies/history_overview/javascript_library/all/y)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Popular</li><li>Same goes for AltJS</li></ul>">
            <Layout>
              <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
                <Image src={images.redmonk.replace("/", "")} />
              </Link>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Amazing growth rate.</li><li>At this rate bigger than others combined.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Module Counts
            </Heading>
            <Layout>
              <Image src={images.moduleCounts.replace("/", "")} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Angular dominates the work market.</li><li>Early signs of React.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Job Trends
            </Heading>
            <Layout>
              <Image src={images.jobs.replace("/", "")} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.indeed.com/jobtrends/q-React.js-q-Knockout-q-Backbone.js-q-Angularjs.html">Indeed</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Also job titles change.</li><li>Increasing demand for full stack developers.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Job Trends II
            </Heading>
            <Layout>
              <Image src={images.jobTitles.replace("/", "")} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.indeed.com/jobtrends/q-backend-q-frontend-q-full-stack.html">Indeed</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Average salary of a React developer in SF - $153k</Quote>
              <Cite><Link href="http://www.indeed.com/salary?q1=React+Js+Front+End+Engineer&l1=San+Francisco%2C+CA">Indeed</Link></Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Always bet on JS!</Quote>
              <Cite>Brendan Eich</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.javascript.replace("/", "")} margin="0px auto 40px" height="650px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.jackie.replace("/", "")} margin="0px auto 40px" height="381px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.javascript2.replace("/", "")} margin="0px auto 40px" height="650px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Image src={images.logo.replace("/", "")} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="black">
              SurviveJS
            </Heading>
            <Heading size={1} fit>
              Webpack and React
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.kanban.replace("/", "")} margin="0px auto 40px" height="279px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} caps fit>
              Technology
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary" notes="">
            <Image src={images.markdown.replace("/", "")} margin="0px auto 40px" height="127px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Markdown in brief
            </Heading>
            <Markdown>
          {`
* Basic syntax for authoring
* Integrates well with other tooling &#8594; ebook versions, book, site
* Not WYSIWYG
* Easy to version
* Ideal for programmers
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary" notes="">
            <Image src={images.github.replace("/", "")} margin="0px auto 40px" height="209px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              GitHub in brief
            </Heading>
            <Markdown>
          {`
* Good collaboration platform
* Primarily for code but works for books
* Provides versioning (Git), issue tracker, basic analytics
* Book site is hosted on top of [GitHub Pages](https://pages.github.com/)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <iframe
              width="135%"
              height="750px"
              style={{transform: 'scale(0.75, 0.75)', transformOrigin: 'top left'}}
              src="https://antwarjs.github.io"/>
          </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading caps fit size={1} textColor="primary">
            Antwar in brief
          </Heading>
          <Markdown>
    {`
* Custom site generator based on Webpack and React
* First version by Brad Denver, forked by Andreas Eldh since. I joined in.
* Currently taking Antwar to a new direction
* "Webpack of static site generators"
* Configuration over Convention
    `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <iframe
              width="135%"
              height="750px"
              style={{transform: 'scale(0.75, 0.75)', transformOrigin: 'top left'}}
              src="https://leanpub.com/survivejs_webpack_react"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Leanpub in brief
            </Heading>
            <Markdown>
    {`
* Light platform for selling ebooks (pdf, epub, mobi)
* Provides Markdown based generator (supports custom syntax)
* Takes $0.50 + 10% cut per sale (if starting price isn't zero)
* Supports "pay what you want"
* Doesn't give direct access to your client information :(
* Decent starting point, though
* Alternatives: [Gumroad](https://gumroad.com/), [DPD](https://getdpd.com/), [Createspace](https://www.createspace.com/), [iBooks](https://www.apple.com/ibooks/), [Lulu](https://www.lulu.com/)
    `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} caps fit>
              Process
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps size={1} textColor="primary">
              Drivers
            </Heading>
            <Markdown>
          {`
* Passion, interest in topic
* Community (readers, collaborators, my editor)
* Money (validates product, allows to continue)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps size={1} textColor="primary">
              Release Process
            </Heading>
            <Markdown>
          {`
* Modeled after open source software development
* Fast, light releases (weekly first, monthly now)
* 1.0.0, 1.1.0, ..., 2.0.0-rc4, 2.0.0, 2.1.0, ..., 2.5.0
* Release notes through the blog
* Continuous improvement based on feedback
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary" notes="">
            <Image src={images.covers.replace("/", "")} margin="0px auto 40px" height="600px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Process Results
            </Heading>
            <Markdown>
          {`
* Higher quality than I could have ever reached on my own
* 210+ pages, 39k+ words, 15+ chapters
* 2000+ readers at Leanpub
* Thousands outside (200k+ visitors per month)
* Tens of contributors (GitHub issues, Disqus, direct feedback, Gitter, ...)
* Split to two books (one for React, one for Webpack)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} caps fit>
              Marketing
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <iframe
              width="135%"
              height="750px"
              style={{transform: 'scale(0.75, 0.75)', transformOrigin: 'top left'}}
              src="https://www.survivejs.com"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Marketing Channels
            </Heading>
            <Markdown>
          {`
* [GitHub](https://github.com/survivejs/react) - 2500+ commits, 46+ contributors, 290+ closed issues, 1400+ stars, 330+ forks
* [Twitter](https://twitter.com/survivejs) - 2400+ followers
* [Leanpub](https://leanpub.com/survivejs_webpack_react) - 3000+ readers (both combined), featured 5+ times, amongst weekly bestsellers
* MailChimp - 1000+ subscribers
* Guest posts
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Marketing Results
            </Heading>
            <Markdown>
          {`
* [Alexa](http://www.alexa.com/siteinfo/survivejs.com) - Top ~100k
* [SimilarWeb](http://www.similarweb.com/website/survivejs.com) - Estimated traffic, 200k+ visits per month
* [Blog](http://survivejs.com/blog/) - 60+ posts, 30+ interviews
* [Gitter](https://gitter.im/survivejs/react) - 440+ people
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Link href="http://www.reactindiebundle.com/">
              <Image src={images.indieBundle.replace("/", "")} margin="0px auto 40px" height="600px"/>
            </Link>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} caps fit>
              Sales
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              From Zero to $50k
            </Heading>
            <Markdown>
          {`
* Started selling at April (2015)
* First, free "sale" on 11th
* First paid one on 12th, $8.5
* July - 1.0 released, hit $1k &#8594; [Crisis of faith](http://survivejs.com/blog/the-story-so-far/)
* Currently sales hover around $100-200 per day
* Gradually raised price level to $19.99 per book
* $20k total sales reached in January (2016)
* 2.0 released in February - [Paper version](http://www.amazon.com/SurviveJS-Webpack-React-apprentice-master/dp/152391050X)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit>
              1$ == ~0.5€
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} caps fit>
              Business Models
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.openClosed.replace("/", "")} bgDarken={0.5}>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Open
                </Heading>
                <Markdown style={{color: "white"}}>
          {`
* Easier to market
* Easier to collaborate
* Harder to monetize
          `}
                </Markdown>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Closed
                </Heading>
                <Markdown style={{color: "white"}}>
          {`
* Harder to market
* Harder to collaborate
* Easier to monetize
          `}
                </Markdown>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Open + Closed = Open Source++
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Upsell
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} caps fit>
              Lessons learned
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Writing books is hard work
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Marketing and selling even harder
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Focus on delivering value straight from the start
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Small bets over big ones
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Persistency pays off (eventually)
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Luck is made
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} caps fit>
              What next?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Wider distribution
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              More content
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              More books
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Better service
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              jster.net 2.0
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit>
              Antwar 1.0
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Questions?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made with sisu in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
