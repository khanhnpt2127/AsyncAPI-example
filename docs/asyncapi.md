# Streetlights API 1.0.0 documentation


The Smartylighting Streetlights API allows you
to remotely manage the city lights.


## Table of Contents

* [Servers](#servers)
* [Channels](#channels)


<a name="servers"></a>
## Servers

<table>
  <thead>
    <tr>
      <th>URL</th>
      <th>Scheme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>api.streetlights.smartylighting.com:{port}</td>
      <td></td>
      <td>Test broker</td>
    </tr>

    <tr>
      <td colspan="3">
        <table>
          <thead>
            <tr>
              <td colspan="4">URL Variables</td>
            </tr>
            <tr>
              <th>Name</th>
              <th>Default value</th>
              <th>Possible values</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>port</td>
              <td>
                  1883
              </td>
              <td>
                <ul>
                  <li>1883</li>
                  <li>8883</li>
                </ul>
              </td>
              <td>Secure connection (TLS) is available through port 8883.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>

  </tbody>
</table>


## Channels

<a name="channel-smartylighting/streetlights/1/0/event/{streetlightId}/lighting/measured"></a>

### `publish` smartylighting/streetlights/1/0/event/{streetlightId}/lighting/measured


#### Message



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>lumens </td>
        <td>
          integer
        </td>
        <td><p>Light intensity measured in lumens.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>sentAt </td>
        <td>
          string
        </td>
        <td><p>Date and time when the message was sent.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "lumens": 0,
  "sentAt": "2019-05-20T22:38:02Z"
}
```


## Messages

### lightMeasured 
Inform about environmental lighting conditions for a particular streetlight.




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>lumens </td>
        <td>
          integer
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>sentAt </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>




## Schemas

#### lightMeasuredPayload

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>lumens </td>
        <td>
          integer
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>sentAt </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

#### sentAt

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>sentAt </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

