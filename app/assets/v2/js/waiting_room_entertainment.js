var quotes =
  [
    //quotes from https://ec.europa.eu/digital-single-market/en/news/economic-and-social-impact-software-and-services-competitiveness-and-innovation
    ['Open source software has become a relevant part of the software industry and a number of software ecosystems. It has become an alternative to commercial software in various areas and is already included in many commercial software products.', 'March 2017 Report by the EU'],
    ['OSS can support the development of new software because companies can use existing software to create their software products. Therefore, it can be a catalyst for new software developments and the creation of new software companies.', 'March 2017 Report by the EU'],
    ['OSS can ... be considered as an important factor in the value creation of other software, even if it is difficult to quantify. Today, OSS often replaces the standard middleware platform provided by a third party. It limits costs and, more importantly, dependency to some extent.', 'March 2017 Report by the EU'],
    ['Software vendors that build new products can save costs if they reuse existing open source software components instead of developing software on their own or buying software components. As a result, open source software can foster the development of new software products as well as the creation of new software vendors.', 'March 2017 Report by the EU'],
    ['OSS allows companies to incorporate IT in their value chain in an easy way. Instead of buying commercial software that may involve the risk of a vendor lock-in, they just have to share value with the OSS community.', 'March 2017 Report by the EU'],
    ['The basic principle of open source software development is that a community of software experts contributes time and effort for coding, reviewing and testing to publicly available source code.', 'March 2017 Report by the EU'],
    ['Open source can ... be a key success factor for co-innovation as none of the participants will have the upper hand. OSS can create standards that are very important for the development of emerging technologies and that help lower the total cost of ownership.', 'March 2017 Report by the EU'],
    ['Future software must be easily developed from components and freely available software and its maintenance must be supported by a wide community. This includes a reuse and evolution of existing software and modules: rather than developing from scratch, existing software must become more easily retrievable, interoperable and usable.', 'March 2017 Report by the EU'],
    ['OSS is also a firm promoter of standards and interoperability. This openness lowers the risk of a vendor lock-in. OSS is based on communities that develop software in a collaborative way. Many enabling technologies for SMAC have strong OSS roots.', 'March 2017 Report by the EU'],
    ['Some commercial vendors offer open source software in order to create a large user community. They generate revenues from subscriptions to support and updates and/or professional services as well as from selling extensions or professional editions that are based on the open source software. Examples are the providers of the Linux distributions RedHat and Suse.', 'March 2017 Report by the EU'],
    ['Major commercial software vendors such as IBM and HP have made open source technology a part of their business by integrating it into their own products and by providing professional services for open source software.', 'March 2017 Report by the EU'],
    ['Many business applications already include open source software and this is going to increase. Some vendors may donate part of their products to an open source foundation in order to create a larger user community that will potentially become buyers of commercial add-ons or services. On the other hand, open source software that is free of charge can be an alternative to commercial application software.', 'March 2017 Report by the EU'],
    ['According to Carlo Daffara, a researcher in the field of IT economics who contributed to several European Commission research projects involving open source, the European economy saves around EUR114 billion per year by using open source software solutions. Apart from direct cost savings, other benefits of open source are reduced project failure and lower cost of code maintenance.', 'March 2017 Report by the EU'],
    ['Quoting several sources, [Carlo Daffara, researcher in IT economics] estimates that about 35 per cent of the software  used in the past five years was directly or indirectly derived from open source.', 'March 2017 Report by the EU'],
    ['Companies outsource activities that are less critical. For example, a car manufacturer will hardly outsource the in-house software development for its autonomous driving technology, as this is highly confidential and highly relevant for its competitiveness.', 'March 2017 Report by the EU'],
    ['Outsourcing can be an alternative to in-house software development and more and more companies take advantage of this. ... Two areas of potential outsourcing in the area of in-house software development are testing and maintenance.', 'March 2017 Report by the EU'],
    ['As demand for individual software development increases, companies evaluate ways to outsource such activities due to internal skill shortages and cost considerations.', 'March 2017 Report by the EU'],
    //quotes from https://ec.europa.eu/digital-single-market/en/news/drucker-forum-2016-entrepreneurial-society-0
    ["Victor Hugo once remarked: 'You can resist an invading army; you cannot resist an idea whose time has come'. The Drucker Forum will ask the question and deliver elements of response as to whether the time for a new entrepreneurial age has come.", 'Promotional site for the 2016 Drucker Forum'],
    ['Digital technology has played an accelerating role in this transformation [to an entrepreneurial society] by dramatically lowering barriers to entry in many industries and by providing new tools for managing knowledge creation and sharing and by enabling new forms of continuous learning, all on a global canvas.', 'Promotional site for the 2016 Drucker Forum'],
    ['While the journey towards an entrepreneurial society is by no means a straight-line progression towards a well-defined destination, broad cultural changes have brought entrepreneurialism into the mainstream. An activity that was once regarded as peripheral, perhaps even a bit suspect, has become cool, celebrated by politicians and embraced by the new generations.', 'Promotional site for the 2016 Drucker Forum'],
    ['[T]he emergence of an entrepreneurial culture entails a broader transformation of the economic fabric of our society, as we see in the rapid proliferation of free agents in the form of contractors, freelancers and self-employed workers on on-demand platforms, for example.', 'Promotional site for the 2016 Drucker Forum'],
    ['[I]n a world of rapid change frequent job and career moves, switches between employed and independent roles become the rule rather than the exception.', 'Promotional site for the 2016 Drucker Forum'],
    ['Within large organizations a renewed focus on freeing up the creative and innovative potential of workers points in the same direction [as that of the entrepreneurial society] i.e. a new mindset of ownership, responsibility and autonomy.', 'Promotional site for the 2016 Drucker Forum']
  ];

var waitingRoomEntertainment = function() {
  var quote = randomElement(quotes)
  var text = quoteFormatter(quote)
  var div = $(".waiting_room_entertainment")
  div.html(text);
}

var quoteFormatter = function(quoteArray) {
  return quoteArray[0] + "----" + quoteArray[1]
}