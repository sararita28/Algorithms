<h2>System Design and Scalability</h2>
<p>While system design questions aren't really tests of what you know, certain concepts can make things a lot easier</p>

<h3>Key Concepts</h3>
<ul>
  <li><b>Horizontal vs. Vertical Scaling:</b> A system can be scaled one of two ways: 
    <ul>
      <li><i>Vertical scaling:</i> means increasing the resources of a specific node. </li>
      <li><i>Horizontal scaling:</i> means increasing the number of nodes.</li>
      <i>Vertical scaling is generally easier than horizontal scaling, but it's limited. You can only add so much memory or disk space.</i>
    </ul></li>
  <li><b>Load Balancer:</b> Typically, some frontend parts of a scalable website will be thrown behind a load balancer. This allows a system to distribute the load evenly so that one server doesn't crash and take down the whole system. To do so, of course, you have to build out a network of cloned servers that all have essentially the same code and access to the same data.</li>
  <li><b>Database Denormalization and NoSQL:</b> Joins in a relational database such as SQL can get very slow as the system grows bigger. A NoSQL database does not support joins and might structure data in a different way. It is designed to scale better.</li>
  <li><b>Database Partitioning (Sharding):</b> Sharding means splitting the data across multiple machines while ensuring you have a way of figuring out which data is on which machine. A few common ways of partitioning include:
    <ul>
      <li><i>Vertical partitioning:</i> partitioning by feature. One drawback of this is that if one of these tables gets very large, you might need to repartition that database (possibly using a different partitioning scheme).</li>
      <li><i>Key-based (or hash-based) partitioning:</i> uses some part of the data to partition it. One issue with this is that the number of servers you have is effectively fixed. Adding additional servers means reallocating all the data-a very expensive task.</li>
      <li><i>Directory-based partitioning:</i> maintain a lookup table for where the data can be found. 2 major drawbacks: the lookup table can be a single point of failure and constantly accessing this table impacts performance.</li>
    </ul></li>
  <li><b>Caching:</b> An in-memory cache can deliver very rapid results. It is a simple key-value pairing and typically sits between your application layer and your data store.</li>
  <li><b>Asynchronous Processing & Queues:</b> Slow operations should ideally be done asynchronously.</li>
  <li><b>Networking Metrics:</b> Some of the most important metrics around networking include:
    <ul>
      <li><i>Bandwidth:</i> maximum amount of data that can be transferred in a unit of time.</li>
      <li><i>Throughput:</i> actual amount of data that is transferred.</li>
      <li><i>Latency:</i> how long it takes data to go from one end to the other.</li>
    </ul></li>
  <li><b>MapReduce:</b> program typically used to process large amounts of data. Requires you to write a Map step and a Reduce step. </li>
</ul>

<h3>Considerations (when designing a system):</h3>
<ul>
  <li><b>Failures:</b>  plan for many or all of failures</li>
  <li><b>Availability and Reliability:</b> Availability is a function of the percentage of time the system is operational. Reliability is a function of the probability that the system is operational for a certain unit of time.</li>
  <li><b>Read-heavy vs white-heavy:</b> If it's write-heavy, you could consider queuing up the writes (but think about potential failure here!). If it's read-heavy, you might want to cache.</li>
  <li><b>Security:</b> Think about the types of issues a system might face and design around those.</li>
</ul>

---

Keep in mind:
<ul>
  <li>Understanding some big components of system design can be useful, but it's much more about the process you take.</li>
  <li>There are good solutions and bad solutions. There is no perfect solution.</li>
  <li>Many architectures actually end up using multiple partitioning schemes.</li>
</ul>
