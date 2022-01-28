<h2>Testing</h2>
<p>Testing problems usually fall under one of four categories: 
  <ol>
    <li>Test a real world object.</li>
    <li>Test a piece of software.</li>
    <li>Write test code for a function.</li>
    <li>Troubleshoot an existing issue.</li>
  </ol>

<h3>Testing a real world object</h3>
Steps:
<ol>
  <li><b>Who will use it? And why?</b></li>
  <li><b>What are the use cases?</b></li>
  <li><b>What are the bounds of use?</b></li>
  <li><b>What are the stress/ failure conditions?</b>: no product is fail-proof. Analyzing failure conditions must be part of your testing. When is it acceptable (or even necessary) for the product to fail? and what does failure mean?</li>
  <li><b>How would you perform the testing?</b></li>
</ol>

<h3>Testing a piece of software</h3>
<p>Similar to testing a real world object. The major difference is that software testing generally places a greater emphasis on the details of performing testing.</p>
<p>Software testing has 2 core aspects to it:</p>
<ul>
  <li><b>Manual vs. automated testing:</b> Both humans and computers form an essential part of the testing process. In an ideal world, we might love to automate everything, but that's rarely feasible. Some things are simply much better with manual testing because some features are too qualitative for a computer to effectively examine. Manual testing should usually be part of your test procedures.</li>
  <li><b>Black box testing vs. white box testing:</b> This distinction refers to the degree of access we have into the software. In black box testing, we're just given the software as-is and need to test it. With white box testing, we have additional programmatic access to test individual functions. </li>
</ul>
<p>The steps to testing a software are the same as the ones for testing a real world object except that we also need to determine if we're doing black-box testing or white-box testing, and add a last step where we discuss how to perform the testing. </p>

<h3>Testing a function</h3>
<p>Testing a function is the easiest type of testing. The testing is usually limited to validating input and output.</p>
<p>Here are the steps to testing a function:</p>
<ol>
  <li><b>Define the test cases</b>: In general, you should think about the following types of test cases:
    <ul>
      <li>The normal case</li>
      <li>The extremes</li>
      <li>Nulls and illegal input</li>
      <li>Strange input</li>
      <i>Generating these tests does require knowledge of the function you are writing.</i>
    </ul></li>
  <li><b>Define the expected result</b></li>
  <li><b>Write test code</b></li>
</ol>

<h3>Troubleshooting questions</h3>
<p>Your goal is to understand what's really happening. Here are the steps:</p>
<ol>
  <li><b>Understanding the scenario</b>: Ask questions to understand as much about the situation as possible.</li>
  <li><b>Breaking down the problem</b>: When you understand the details of the scenario, you want to break down the problem into testable units. At some point in this process, something will fail. A strong tester would iterate through the elements of this scenario to diagnose the problem.</li>
  <li><b>Creating specific, manageable tests</b>.</li>
</ol>
